module OmniAuthable
  extend ActiveSupport::Concern

  module ClassMethods
    def find_or_create_from_auth_hash(auth, params, request)
      case auth[:provider]
      when 'persona'
        auth = auth_with_persona(auth, params, request)
        [where(email: auth['email']).first_or_create, auth] if auth['status'] == 'okay'
      end
    end

    def auth_with_persona(auth, params, request)
      conn = Faraday.new(url: 'https://verifier.login.persona.org/') do |f|
        f.request  :url_encoded             # form-encode POST params
        f.response :logger                  # log requests to STDOUT
        f.adapter  Faraday.default_adapter  # make requests with Net::HTTPi  faraday.request  :url_encoded             # form-encode POST params
      end
      resp = conn.post('/verify', { assertion: params[:assertion],
                                    audience: "#{request.protocol}#{request.host_with_port}" })

      JSON.parse(resp.body)
    end
  end
end
