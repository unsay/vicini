module Angular
  extend ActiveSupport::Concern

  included do
    respond_to :html, :json
    around_action :without_root_in_json
    layout false
  end

  def without_root_in_json
    ActiveRecord::Base.include_root_in_json = false
    yield
    ActiveRecord::Base.include_root_in_json = true
  end
end
