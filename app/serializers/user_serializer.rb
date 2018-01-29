class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :image, :polls
end
