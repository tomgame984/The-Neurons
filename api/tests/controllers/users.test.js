const dotenv = require("dotenv")
dotenv.config({ path: "./api/.env.test" });
const request = require("supertest");
const app = require("../../app");
const User = require("../../models/user");

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
        .send({ firstName: 'Lana', lastName: 'Del Rey', bio: 'I am a singer.', email: "poppy@email.com", password: "Abcde1234!" });
    
      expect(response.statusCode).toBe(201);
    });

    test("a user is created", async () => {
      await request(app)
        .post("/users")
        .send({ firstName: 'Lana', lastName: 'Del Rey', bio: 'I am a singer.', email: "poppy@email.com", password: "Abcde1234!", image:"testpic" });

      const users = await User.find();
      const newUser = users[users.length - 1];
      expect(newUser.email).toEqual("poppy@email.com");
      expect(newUser.lastName).toEqual("Del Rey");
      expect(newUser.image).toEqual("testpic");
    });
  });

  describe("POST, when password is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({ firstName: "test", lastName: "test", bio: "test", email: "skye@email.com" });

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ firstName: "test", lastName: "test", bio: "test", email: "skye@email.com" });

      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("POST, when email is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({firstName: "test", lastName: "test", bio: "test", password: "1234" });

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ firstName: "test", lastName: "test", bio: "test", password: "1234" });

      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("POST, when first name is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({ lastName: "test", bio: "test", email: "skye@email.com", password: "1234" });

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ lastName: "test", bio: "test", email: "skye@email.com", password: "1234" });

      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });
  
  describe("POST, when last name is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({ firstName: "test", bio: "test", email: "skye@email.com", password: "1234" });

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ firstName: "test", bio: "test", email: "skye@email.com", password: "1234" });

      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("POST, when bio is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({ firstName: "test", lastName: "test", email: "skye@email.com", password: "1234" }); ;

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ firstName: "test", lastName: "test", email: "skye@email.com", password: "1234" });

      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });
});
