const dotenv = require("dotenv")
dotenv.config({ path: "./api/.env.test" });
require("../mongodb_helper");
const User = require("../../models/user");
const bcrypt = require("bcrypt");


describe("User model", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should have access to test environment variables', () => {
    // Access your environment variables as usual
    const mongodbUrl = process.env.MONGODB_URL;
    expect(mongodbUrl).toBeDefined();
  });


  it("has an firstName", () => {
    const user = new User({
      firstName: "Lana",
      lastName: "Del Rey",
      bio: "I am a singer.",
      email: "someone@example.com",
      password: "Abcde1234!",
    });
    expect(user.firstName).toEqual("Lana");
  });

  it("has an lastName", () => {
    const user = new User({
      firstName: "Lana",
      lastName: "Del Rey",
      bio: "I am a singer.",
      email: "someone@example.com",
      password: "Abcde1234!",
    });
    expect(user.lastName).toEqual("Del Rey");
  });

  it("has a bio", () => {
    const user = new User({
      firstName: "Lana",
      lastName: "Del Rey",
      bio: "I am a singer.",
      email: "someone@example.com",
      password: "Abcde1234!",
    });
    expect(user.bio).toEqual("I am a singer.");
  });
  
  it("has an email address", () => {
    const user = new User({
      firstName: "Lana",
      lastName: "Del Rey",
      bio: "I am a singer.",
      email: "someone@example.com",
      password: "Abcde1234!",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      firstName: "Lana",
      lastName: "Del Rey",
      bio: "I am a singer.",
      email: "someone@example.com",
      password: "Abcde1234!",
    });
    
    expect(user.password).toEqual("Abcde1234!");
  });

  it("has a pic", () => {
    const user = new User({
      firstName: "Lana",
      lastName: "Del Rey",
      bio: "I am a singer.",
      email: "someone@example.com",
      password: "testpic!",
    });
    
    expect(user.password).toEqual("testpic!");
  });

  it("can list all users", async () => {
    const users = await User.find();
    expect(users).toEqual([]);
  });

  it("can save a user", async () => {
    const plaintextPassword = "Abcde1234!"
    const user = new User({
      firstName: "Lana",
      lastName: "Del Rey",
      bio: "I am a singer.",
      email: "someone@example.com",
      password: plaintextPassword,
    });

    await user.save();
    const users = await User.find();

    expect(users[0].firstName).toEqual("Lana");
    expect(users[0].lastName).toEqual("Del Rey");
    expect(users[0].bio).toEqual("I am a singer.");
    expect(users[0].email).toEqual("someone@example.com");
  });
  it("can save a user with a hashed password", async () => {
    const plaintextPassword = "Abcde1234!"
    const user = new User({
      firstName: "Lana",
      lastName: "Del Rey",
      bio: "I am a singer.",
      email: "someone@example.com",
      password: plaintextPassword,
    });

    await user.save();
    const users = await User.find();
    console.log (users[0].password)
    const secret = "Awe5some$!";
    const isPasswordValid = await bcrypt.compare(plaintextPassword + secret, users[0].password);
    console.log(isPasswordValid)
    expect(isPasswordValid).toBe(true);
  });
});
