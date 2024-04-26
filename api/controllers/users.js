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
    console.error(err.message);
    res.status(400).json({ message: err.message });
  }
};

const updateUserEventHistory = async (req, res) => {
  const user = await User.find({ id: req.userId });
  const token = generateToken(req.userId);

  User.findById(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      return;
    }
  
    if (!user) {
      console.error('User not found');
      return;
    }
  
    // Modify the event_history field
    user.event_history = {
      category: "",
      description: "",
      eventScore: "",
      dateOfEntry: new Date(),
    };
  
    // Save the updated user document back to the database
    user.save((err, updatedUser) => {
      if (err) {
        console.error('Error saving updated user:', err);
        return;
      }
  
      console.log('User updated successfully:', updatedUser);
    });
  });
}

const UsersController = {
  create: create,
  getUser: getUser,
  updateUserEventHistory: updateUserEventHistory,

};

module.exports = UsersController;




