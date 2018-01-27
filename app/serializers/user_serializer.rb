class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :polls
end
