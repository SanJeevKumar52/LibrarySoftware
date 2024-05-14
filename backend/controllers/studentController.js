const { Student } = require("../models/studentModel");

const deleteStudent = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await Student.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  deleteStudent,
};
