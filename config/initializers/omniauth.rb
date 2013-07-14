Rails.application.config.middleware.use OmniAuth::Builder do
  provider :persona, audience_url: 'http://localhost:3000'
end
