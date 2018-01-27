# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User1 = User.create!(username: "Louis")
User2 = User.create!(username: "John")
Poll1 = Poll.create!(title: "Test")

Poll1.users << User1
Poll1.users << User2