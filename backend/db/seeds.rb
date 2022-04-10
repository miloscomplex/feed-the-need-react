# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Michael Dutton', password: '12345', email: 'mike@mike.com', user_type: 'needy', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum', credits: '100')
User.create(name: 'James Dutton', password: '12345', email: 'james@james.com', user_type: 'needy', bio: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum', credits: '100')
User.create(name: 'Huey Gawker',  password: '12345', email: 'huey@huey.com', user_type: 'donator',  bio: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum')
User.create(name: 'Lisa Moore',  password: '12345', email: 'lisa@lisa.com', user_type: 'donator',  bio: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum')


Item.create(user_id: 2, name: 'coat', qty: 1, category: 'clothing')
Item.create(user_id: 1, name: 'sleeping bag', qty: 1, category: 'essentials')
Item.create(user_id: 1, name: 'shoes', qty: 2, category: 'clothing')
Item.create(user_id: 2, name: 'gallon of water', qty: 4, category: 'clothing')
Item.create(user_id: 3, name: 'pants', qty: 1, category: 'clothing')
Item.create(user_id: 1, name: 'toothpaste and brush', qty: 1, category: 'essentials')
Item.create(user_id: 1, name: 'shoes size 11', qty: 2, category: 'clothing')
Item.create(user_id: 2, name: 'work pants', qty: 4, category: 'clothing')


puts "database has been seeded successfully"
