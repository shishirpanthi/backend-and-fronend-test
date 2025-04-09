const express = require("express");
const { register, login } = require("../controllers/authController"); // Corrected import

const router = express.Router();

// Route for user registration
router.post("/register", register); // Updated to use the correct function name

// Route for user login
router.post("/login", login); // Updated to use the correct function name

module.exports = router;
