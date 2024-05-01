const dotenv = require("dotenv")
dotenv.config({ path: "./api/.env.test" });
const request = require("supertest");
const app = require("../../app");
const User = require("../../models/user");
const { generateToken } = require("../../lib/token") 


require("../mongodb_helper");

describe("/users", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should have access to test environment variables', () => {
    // Access your environment variables as usual
    const mongodbUrl = process.env.MONGODB_URL;
    expect(mongodbUrl).toBeDefined();
  });

  describe("POST, when email and password are provided", () => {
    test("the response code is 201", async () => {
      const response = await request(app)
        .post("/users")
        .send({ name: 'Lana', surname: 'Del Rey', email: "poppy@email.com", password: "Abcde1234!", neurodiversity: "Autism" });
    
      expect(response.statusCode).toBe(201);
    });

    test("a user is created", async () => {
      await request(app)
        .post("/users")
        .send({ name: 'Lana', surname: 'Del Rey', email: "poppy@email.com", password: "Abcde1234!", neurodiversity: "Autism" });

      const users = await User.find();
      const newUser = users[users.length - 1];
      expect(newUser.name).toEqual("Lana");
      expect(newUser.email).toEqual("poppy@email.com");
      expect(newUser.surname).toEqual("Del Rey");
      expect(newUser.neurodiversity).toEqual("Autism");
    });
  });

  describe("POST, when password is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({ name: 'Lana', surname: 'Del Rey', email: "poppy@email.com", neurodiversity: "Autism"  });

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ name: 'Lana', surname: 'Del Rey', email: "poppy@email.com", neurodiversity: "Autism"  });
      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("POST, when email is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({name: 'Lana', surname: 'Del Rey', password: "Abcde1234!", neurodiversity: "Autism" });

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ name: 'Lana', surname: 'Del Rey', password: "Abcde1234!", neurodiversity: "Autism" });
      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("POST, when first name is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({surname: 'Del Rey', email: "poppy@email.com", password: "Abcde1234!", neurodiversity: "Autism"});

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({surname: 'Del Rey', email: "poppy@email.com", password: "Abcde1234!", neurodiversity: "Autism" });

      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });
  
  describe("POST, when last name is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({ name: 'Lana', email: "poppy@email.com", password: "Abcde1234!", neurodiversity: "Autism" });

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ name: 'Lana', email: "poppy@email.com", password: "Abcde1234!", neurodiversity: "Autism"});

      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("POST, when neurodiversity is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({ name: 'Lana', surname: 'Del Rey', email: "poppy@email.com", password: "Abcde1234!" }); ;

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ name: 'Lana', surname: 'Del Rey', email: "poppy@email.com", password: "Abcde1234!" });

      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });
  
  describe("testing for updating User Event History", () => {

    test("a user's event_history can be updated", async () => {

      // Create a new user
      await request(app)
          .post("/users")
          .send({ name: 'Lana', surname: 'Del Rey', email: "poppy@email.com", password: "Abcde1234!", neurodiversity: "Autism" });
      
          // Fetch the newly created user from the database
      const user = await User.findOne();
      console.log("NEW-USER", user);
      
      // Send a PUT request to update the user's event history
      const token = generateToken(user._id)
      await request(app)
      .put("/users", )
          .set("userId", user._id)
          .set('Authorization', `Bearer ${token}`)
          .send({ category: "Recharge", description: "Running", eventScore: "+5" });
      
          // Fetch the updated user from the database
      const updatedUser = await User.findById(user._id);
      console.log("UPDATED-USER", updatedUser);
      
      // Get the updated event from the event history
      const event = updatedUser.event_history["event1"];
      
      // Assert the updated event data
      expect(event.category).toEqual("Recharge");
      expect(event.description).toEqual("Running");
      expect(event.eventScore).toEqual("+5");
      expect(event.timestamp).toBeDefined();
  });

    test("a user's event_history can be updated without a description", async () => {
      // Create a new user
      await request(app)
          .post("/users")
          .send({ name: 'Lana', surname: 'Del Rey', email: "poppy@email.com", password: "Abcde1234!", neurodiversity: "Autism" });
      
          // Fetch the newly created user from the database
      const user = await User.findOne();
      console.log("NEW-USER", user);
      
      // Send a PUT request to update the user's event history
      const token = generateToken(user._id)
      await request(app)
      .put("/users", )
          .set("userId", user._id)
          .set('Authorization', `Bearer ${token}`)
          .send({ category: "Recharge", eventScore: "+5" });
      
          // Fetch the updated user from the database
      const updatedUser = await User.findById(user._id);
      console.log("UPDATED-USER", updatedUser);
      
      // Get the updated event from the event history
      const event = updatedUser.event_history["event1"];
      
      // Assert the updated event data
      expect(event.category).toEqual("Recharge");
      expect(event.eventScore).toEqual("+5");
      expect(event.timestamp).toBeDefined();
  });

  
    test("if a token doesnt exist, return with error code 401", async () => {
       // Create a new user
      await request(app)
      .post("/users")
      .send({ name: 'Lana', surname: 'Del Rey', email: "poppy@email.com", password: "Abcde1234!", neurodiversity: "Autism" });
  
      // Fetch the newly created user from the database
  const user = await User.findOne();
  console.log("NEW-USER", user);
  
  // Send a PUT request to update the user's event history
  const response = await request(app)
  .put("/users", )
      .set("userId", user._id)
      .send({ category: "Recharge", eventScore: "+5" });
  
      // Fetch the updated user from the database
  const updatedUser = await User.findById(user._id);
  console.log("UPDATED-USER", updatedUser);
  
  // Get the updated event from the event history
  const event = updatedUser.event_history["event1"];
  
  // Assert the expected error
  expect(response.statusCode).toBe(401);
  });
  })
})