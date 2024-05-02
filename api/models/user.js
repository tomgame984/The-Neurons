const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  surname: { type: String },
  email: { type: String },
  password: { type: String },
  neurodiversity: { type: String },
  score: { type: Number, default: 0 },
  event_history: { type: Object, default: {} }
},
{minimize: false}
);

UserSchema.pre('save', async function(next) {
  const pattern = /^(?=.*[A-Z])(?=.*[!@$%&])(?=.*[a-z]).{8,}$/ // has to have one of these symbols, !@$%& and at least 8 charachters and a capital letter
  const user = await User.findOne({ email: this.email });
  try {
      if (this.isModified('password') || this.isNew) {
          if (user) {
              throw new Error('User already exists.')
          }

          if (!this.email) {
              throw new Error('Please enter an email.')
          }
          if (!pattern.test(this.password)) {
              throw new Error('Password has to have one of these symbols: !@$%&, at least 8 characters and a capital letter.');
          }
          if (!this.name) {
              throw new Error('Please enter a first name.')
          }
          if (!this.surname) {
              throw new Error('Please enter a last name.')
          }
          if (!this.neurodiversity) {
              throw new Error('Please enter a neurodiversity.')
          }
          const secret = process.env.SECRET;
          const hashedPassword = await bcrypt.hash(this.password + secret, 10);
          this.password = hashedPassword
      }

      // Calculate score from event history
      let score = 0;
      const eventHistory = this.event_history;
      for (const key in eventHistory) {
          if (eventHistory.hasOwnProperty(key)) {
              const event = eventHistory[key];
              score += parseInt(event.eventScore);
          }
      }
      // Update the score field
      this.score = score;

      next();
  } catch (error) {
      next(error);
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;