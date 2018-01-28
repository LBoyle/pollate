class User < ApplicationRecord
  has_and_belongs_to_many :polls
  has_many :polls
end
