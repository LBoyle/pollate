class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :polls
end
