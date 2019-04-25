const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/test", authController.test);
router.get("/login", authController.login);
router.post("/login", authController.createSession);
router.get("/logout", authController.destroy);

module.exports = router;
