const express = require("express");
const { createUserController } = require("./service.controller");

const router = express.Router();

router.post("/create-user", createUserController);

module.exports = router;
