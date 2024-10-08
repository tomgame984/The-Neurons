const bcrypt = require("bcryptjs");
const User = require("../models/user");

const { generateToken } = require("../lib/token");

const getUser = async (req, res) => {
  const user = await User.find({ _id: req.user_id });
  const token = generateToken(req.user_id);
  res.status(200).json({ user: user, token: token });
};


// line 15-18 will have to be changed based on the mongoose DB
const create = async (req, res) => {
  const {  name, surname, email, password, neurodiversity } = req.body;

  try {
    const user = new User({ name, surname, email, password, neurodiversity });
    await user.save();


    console.log("User created, id:", user._id.toString());
    res.status(201).json({ message: "OK" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};

const updateUserEventHistory = async (req, res) => {
  try {
      const userId = req.headers["userid"]
      console.log("USER ID", userId)
      const user = await User.findById(userId);
    console.log("USER FOUND", user)
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      const event = req.body;
      const token = generateToken(req.userId);
      // Updating the event_history object
      const timestamp = Date.now();
      const formattedDate = new Date(timestamp).toLocaleDateString("en-GB");
      const newEvent = { ...event, timestamp: formattedDate };
      user.event_history = { ...user.event_history, [`event${Object.entries(user.event_history).length + 1}`]: newEvent };


      // Save the updated user document back to the database
      await user.save();
      
      return res.status(200).json({ message: "User event history updated successfully", token });
  } catch (error) {
      console.error("Error updating user event history:", error);
      return res.status(400).json({ message: err.message });
  }
}


const UsersController = {
  create: create,
  getUser: getUser,
  updateUserEventHistory: updateUserEventHistory,

};

module.exports = UsersController;




