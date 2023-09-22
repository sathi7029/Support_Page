const form = require("../models/models");

exports.createIssue = async (req, res) => {
  try {
    const { name, email, title, description } = req.body;
    const response = await form.create({ name, email, title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "succesfully created",
    });
  } catch (err) {
    console.error(err);
    console.log("not created succesfully");
    res.status(500).json({
      success: false,
      data: err.message,
      message: " not created succesfully",
    });
  }
};
