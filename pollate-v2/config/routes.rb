Rails.application.routes.draw do
  scope :api do
    resources :polls
    resources :users
  end
end
