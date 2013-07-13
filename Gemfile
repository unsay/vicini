source 'https://rubygems.org'

ruby '2.0.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.0'

gem 'activerecord-postgres-earthdistance'
gem 'acts-as-taggable-on'
gem 'coffee-rails', '~> 4.0.0'
gem 'geocoder'
gem 'geokit'
gem 'haml-rails'
gem 'jbuilder', '~> 1.0.1'
gem 'jquery-rails'
gem 'pg'
gem 'sass-rails', '~> 4.0.0'
gem 'simple_form'
gem 'sorcery', git: 'git://github.com/NoamB/sorcery.git' # master branch for Rail 4
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
