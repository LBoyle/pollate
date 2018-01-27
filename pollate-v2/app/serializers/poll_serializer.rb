class PollSerializer < ActiveModel::Serializer
  attributes :id, :title, :users
end
