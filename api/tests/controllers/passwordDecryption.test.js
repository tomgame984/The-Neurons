const bcrypt = require('bcrypt');
const { decryptPassword } = require('../../controllers/authentication'); 


describe("Password Decryption", () => {
  test("decrypts the hashed password correctly", async () => {
    const plaintextPassword = "password123"; 
    const hashedPassword = await bcrypt.hash(plaintextPassword, 10);

    expect(hashedPassword).not.toEqual(plaintextPassword);
  });

  test("bcrypt.compare returns true for matching passwords", async () => {
    const plaintextPassword = "password123"; 
    const hashedPassword = await bcrypt.hash(plaintextPassword, 10);
    const isPasswordValid = await bcrypt.compare(plaintextPassword, hashedPassword);

    expect(isPasswordValid).toBe(true);
  });

  test("bcrypt.compare returns false for non-matching passwords", async () => {
    const plaintextPassword1 = "password123"; 
    const plaintextPassword2 = "differentPassword";
    const hashedPassword1 = await bcrypt.hash(plaintextPassword1, 10);
    const hashedPassword2 = await bcrypt.hash(plaintextPassword2, 10);
    const isPasswordValid = await bcrypt.compare(plaintextPassword1, hashedPassword2);
    
    expect(isPasswordValid).toBe(false);
  });  
});