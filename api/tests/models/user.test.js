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
      name: "Lana",
      surname: "Del Rey",
      email: "someone@example.com",
      password: "Abcde1234!",
      neurodiversity: "Autism"
    });
    expect(user.name).toEqual("Lana");
  });

  it("has an lastName", () => {
    const user = new User({
      name: "Lana",
      surname: "Del Rey",
      email: "someone@example.com",
      password: "Abcde1234!",
      neurodiversity: "Autism"
    });
    expect(user.surname).toEqual("Del Rey");
  });

  it("has a bio", () => {
    const user = new User({
      name: "Lana",
      surname: "Del Rey",
      email: "someone@example.com",
      password: "Abcde1234!",
      neurodiversity: "Autism"
    });
    expect(user.neurodiversity).toEqual("Autism");
  });
  
  it("has an email address", () => {
    const user = new User({
      name: "Lana",
      surname: "Del Rey",
      email: "someone@example.com",
      password: "Abcde1234!",
      neurodiversity: "Autism"
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      name: "Lana",
      surname: "Del Rey",
      email: "someone@example.com",
      password: "Abcde1234!",
      neurodiversity: "Autism"
    });
    
    expect(user.password).toEqual("Abcde1234!");
  });

  it("can list all users", async () => {
    const users = await User.find();
    expect(users).toEqual([]);
  });

  it("can save a user", async () => {
    const plaintextPassword = "Abcde1234!"
    const user = new User({
      name: "Lana",
      surname: "Del Rey",
      email: "someone@example.com",
      password: "Abcde1234!",
      neurodiversity: "Autism"
    });

    await user.save();
    const users = await User.find();

    expect(users[0].name).toEqual("Lana");
    expect(users[0].surname).toEqual("Del Rey");
    expect(users[0].neurodiversity).toEqual("Autism");
    expect(users[0].email).toEqual("someone@example.com");
  });

  it("can save a user with a hashed password", async () => {
    const plaintextPassword = "Abcde1234!"
    const user = new User({
      name: "Lana",
      surname: "Del Rey",
      neurodiversity: "Autism",
      email: "someone@example.com",
      password: plaintextPassword,
    });

    await user.save();
    const users = await User.find();
    const secret = process.env.SECRET;
    const isPasswordValid = await bcrypt.compare(plaintextPassword + secret, users[0].password);
    expect(isPasswordValid).toBe(true);
  });
});
