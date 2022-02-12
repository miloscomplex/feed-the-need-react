Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :items
  resources :donates

  # root 'welcome#index'

  post '/login', to: 'sessions#login', as: 'postlogin'

  get '/login', to: 'sessions#session_user', as: 'login'

  get '/logout', to: 'sessions#logout', as: 'logout'

  # root :to => redirect('/login')



end
