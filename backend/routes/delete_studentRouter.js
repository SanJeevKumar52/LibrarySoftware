const express = require("express");
const router = express.Router();
const { deleteStudent } = require("../controllers/studentController");

router.delete("/:id", deleteStudent);

module.exports = router;
