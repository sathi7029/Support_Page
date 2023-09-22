const express = require("express");
const router = express.Router();

const { createIssue } = require("../controller/create");
router.post("/create", createIssue);
module.exports = router;
