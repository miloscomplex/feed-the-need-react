Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :users
  resources :items
  resources :donates

  # root 'welcome#index'
  resources :users 

  post '/login', to: 'sessions#login', as: 'login'

  get '/login', to: 'sessions#new', as: 'welcome'

  get '/auto_login', to: 'sessions#auto_login'

  get '/user_is_authed', to: 'ssessions#user_is_authed'

  get '/logout', to: 'sessions#logout', as: 'logout'



  # root :to => redirect('/login')



end
