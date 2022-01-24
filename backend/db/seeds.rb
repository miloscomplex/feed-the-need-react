# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Michael Dutton', email: 'mike@mike.com', user_type: 'needy')
User.create(name: 'James Dutton', email: 'james@james.com', user_type: 'needy')
User.create(name: 'Huey Gawker', email: 'huey@huey.com', user_type: 'donator')

Item.create(user_id: 2, name: 'coat', qty: 1, category: 'clothing')
Item.create(user_id: 1, name: 'sleeping bag', qty: 1, category: 'essentials')
Item.create(user_id: 1, name: 'shoes', qty: 2, category: 'clothing')
Item.create(user_id: 2, name: 'gallon of water', qty: 4, category: 'clothing')

puts "database has been seeded successfully"
