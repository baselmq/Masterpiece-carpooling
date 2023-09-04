const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// ----------------- login -----------------
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password, true);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ status: "success", email, token });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};
// ----------------- get All Users -----------------
// getAllUsers
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
// ----------------- create user -----------------
exports.createUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const user = await User.addUser(username, email, password, role);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ status: "success", user, token });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// ----------------- get user -----------------
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

// ----------------- update user -----------------
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
// ----------------- delete user -----------------
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
