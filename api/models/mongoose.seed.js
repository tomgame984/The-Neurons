const mongoose = require('mongoose');
const User = require("./user") // Assuming User model is defined in a separate file
const Post = require('./post')

const { connectToDatabase } = require("../db/db");
const { sub } = require('date-fns');
require("dotenv").config();

const seedDatabase = async () => {
console.log("THINGS ARE NOT THINGING")
    try {
        // Connect to the database
        await connectToDatabase();
        const createNewUsers = async () => {
      // Delete existing users        
            await User.deleteMany({});
        // Create new users
            await User.create([
            {
                email: 'test@test.com',
                password: 'Password12!',
                firstName: 'Mr Test',
                lastName: 'Testingson the 3rd',
                bio: 'Why hey here is my bio',
                image: 'profiles/xsqsvdilme7ypdn4khsb'
                }
            // Add more users as needed
            ]);
        console.log('Users inserted successfully');
        }
        
    await createNewUsers()
  
    
    } catch (error) {
      console.error('Error seeding:', error);
    } finally {
      // Close the database connection
      await mongoose.connection.close(true);
    }
  };

  seedDatabase();

