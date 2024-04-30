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
            await User.create(
            {     
            name: "Peter",
            surname: "James",
            email: 'test@test.com',
            password: 'Password12!',
            neurodiversity: "OCD",
            score: 0,
            event_history: {"event1": {
                "category": "Rest",
                "description": "Sleep",
                "eventScore": "+5",
                "timestamp": 1714396728167 },

                "event2": {
                "category": "Exercise",
                "description": "Lunges",
                "eventScore": "+5",
                "timestamp": 1714396728168 },

                "event3": {
                "category": "Bootcamp",
                "description": "Coding",
                "eventScore": "-5",
                "timestamp": 1714396728169 }
            }
            // Add more users as needed
        } );
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

