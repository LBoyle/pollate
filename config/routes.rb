Rails.application.routes.draw do
  scope :api do
    resources :polls
    resources :users
    post '/polls/:id/rmuser', to: 'polls#rmember' # add member
    post '/polls/:id/adduser', to: 'polls#amember' # remove member
    # Using POST because DELETE was giving me problems with params
  end
end
