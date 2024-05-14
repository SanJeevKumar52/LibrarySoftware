const { Admin } = require("../models/adminModel");

const addAdmin = async (req, res) => {
  try {
    const newAdmin = new Admin(req.body);
    await newAdmin.save();
    res.status(201).send("Admin successfully added...");
  } catch (error) {
    console.error("Error adding admin:", error);
    res.status(400).send(error);
  }
};

module.exports = {
  addAdmin,
};
