# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User1 = User.create!(username: "Louis", email: "louis@louis.com", image: "https://www.stevensegallery.com/g/300/300")
User2 = User.create!(username: "John", email: "john@john.com", image: "https://www.stevensegallery.com/300/300")
Poll1 = Poll.create!(title: "Test", creator: User1)

Poll1.users << User1
Poll1.users << User2
