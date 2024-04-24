const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  email: {type: String},
  password: { type: String},
  firstName: { type: String},
  lastName: { type: String},
  bio: { type: String},
  image: { type: String},
});

UserSchema.pre('save', async function(next) {
  const pattern = /^(?=.*[A-Z])(?=.*[!@$%&])(?=.*[a-z]).{8,}$/ // has to have one of these symbols, !@$%& and at least 8 charachters and a capital letter
  const user = await User.findOne({ email: this.email });
  try {
    if (this.isModified('password') || this.isNew){
      if (user) {
        throw new Error ('User already exists.')
      }

      if (!this.email) {
        throw new Error ('Please enter an email.')
      }
      if (!pattern.test(this.password)) {
        throw new Error('Password has to have one of these symbols: !@$%&, at least 8 characters and a capital letter.');
      }
      if (!this.firstName) {
        throw new Error ('Please enter a first name.')
      }
      if (!this.lastName) {
        throw new Error ('Please enter a last name.')
      }
      if (!this.bio) {
        throw new Error ('Please enter a bio.')
      }
      const secret = "Awe5some$!";
      const hashedPassword = await bcrypt.hash(this.password + secret, 10);
      this.password = hashedPassword
  }
  next()
  } catch (error) {
    next(error);
  }}
);

const User = mongoose.model("User", UserSchema);
module.exports = User;