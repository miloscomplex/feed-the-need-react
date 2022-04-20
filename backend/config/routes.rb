Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :users
  resources :items, only: [:create, :index, :show]
  resources :donates

  # root 'welcome#index'
  resources :users, only: [:create, :index, :show]

  post '/login', to: 'sessions#login', as: 'login'

  get '/login', to: 'sessions#token_authenticate', as: 'welcome'

  get '/auto_login', to: 'sessions#auto_login'

  post '/user_is_authed', to: 'sessions#user_is_authed', as: 'user_is_authed'

  get '/user_is_authed', to: 'sessions#user_is_authed', as: 'user_is_authed-get'

  get '/logout', to: 'sessions#logout', as: 'logout'

  post '/logout', to: 'sessions#logout', as: 'logout-post'

  get '/users/new-users', to: 'users#new_users', as: 'new-users'

  get '/users/:id/items', to: 'items#show_users_items', as: 'show-items'



  # root :to => redirect('/login')



end
