const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");
const tokenChecker = require("../middleware/tokenChecker");

router.post("/", UsersController.create); //used to log existing users into the system
router.get("/", tokenChecker, UsersController.getUser); //used to create new


module.exports = router;
