Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :items
  resources :donates

  # root 'welcome#index'


  get '/login', to: 'sessions#login', as: 'login'
  post '/login', to: 'sessions#create'

  get '/logout', to: 'sessions#logout', as: 'logout'

  root :to => redirect('/login')



end
