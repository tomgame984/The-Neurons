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
      const user = await User.findOne({ id: req.userId });
      console.log(user)
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      const event = req.body;
      console.log(event)
      const token = generateToken(req.userId);

      // Modify the event_history field
      const newEvent = { ...event, timestamp: Date.now() };
      user.event_history = { ...user.event_history, [`event${Object.entries(user.event_history).length + 1}`]: newEvent };


      // Save the updated user document back to the database
      await user.save();
      
      return res.status(200).json({ message: "User event history updated successfully", token });
  } catch (error) {
      console.error("Error updating user event history:", error);
      return res.status(500).json({ message: "Internal server error" });
  }
}




const UsersController = {
  create: create,
  getUser: getUser,
  updateUserEventHistory: updateUserEventHistory,

};

module.exports = UsersController;




