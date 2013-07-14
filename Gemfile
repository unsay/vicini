source 'https://rubygems.org'

ruby '2.0.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.0'

gem 'activerecord-postgres-earthdistance'
gem 'acts-as-taggable-on'
gem 'coffee-rails', '~> 4.0.0'
gem 'envb-rails', '0.0.5'
gem 'geocoder'
gem 'geokit'
gem 'haml-rails'
gem 'omniauth', '~> 1.1.4'
gem 'omniauth-persona', '~> 0.0.1'
gem 'jbuilder', '~> 1.0.1'
gem 'jquery-rails'
gem 'pg'
gem 'neat', '~> 1.3.0'
gem 'sass-rails', '~> 4.0.0'
gem 'simple_form'
gem 'sorcery', '~> 0.8.2'
gem 'turbolinks'
gem 'uglifier', '>= 1.3.0'

group :development do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'guard-livereload', require: false
  gem 'letter_opener'
  gem 'pry'
  gem 'pry-awesome_print'
  gem 'quiet_assets'
  gem 'rack-livereload'
  gem 'rails_view_annotator'
  gem 'rb-fsevent', require: false if RUBY_PLATFORM =~ /darwin/i  
  gem 'thin'
end

group :test do
  gem 'factory_girl_rails'
  gem 'resque_spec'
  gem 'rspec-rails'
  gem 'rspec_candy'
  gem 'shoulda-matchers'
  gem 'simplecov', require: false
  gem 'timecop'
  gem 'webmock'
  gem 'vcr'
end

group :production do
  gem 'unicorn'
  gem 'rails_log_stdout', github: 'heroku/rails_log_stdout'
  gem 'rails3_serve_static_assets', github: 'heroku/rails3_serve_static_assets'
end
