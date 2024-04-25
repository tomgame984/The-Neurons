const User = require("../models/user");
const { generateToken } = require("../lib/token");
const bcrypt = require("bcrypt");

const createToken = async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log("Auth Error: User not found");
      return res.status(401).json({ message: "User not found" });
    }
    
    const secret = "Awe5some$!"; //this is our salt, this can't be part of the code, will have to move to .env
    const isPasswordValid = await bcrypt.compare(password + secret, user.password );
    console.log(isPasswordValid)
    if (!isPasswordValid) {
      console.log("Auth Error: Passwords do not match");
      return res.status(401).json({ message: "Password incorrect" });
    }
    const token = generateToken(user.id);
    return res.status(201).json({ token: token, message: "OK" });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Internal server error" });

  }
};

const AuthenticationController = {
  createToken: createToken,

};

module.exports = AuthenticationController;
