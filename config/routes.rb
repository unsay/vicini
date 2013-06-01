Vicini::Application.routes.draw do
  resources :users
  root to: 'welcome#index'
end
