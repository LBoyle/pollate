class CreateJoinTableUsersPolls < ActiveRecord::Migration[5.1]
  def change
    create_join_table :users, :polls do |t|
      # t.index [:user_id, :poll_id]
      # t.index [:poll_id, :user_id]
    end
  end
end
