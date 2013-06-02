Vicini::Application.routes.draw do
  resources :users

  resources :users do
    resources :messages
  end
  root to: 'welcome#index'
end
