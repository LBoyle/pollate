class PollSerializer < ActiveModel::Serializer
  attributes :id, :title, :creator, :users
end
