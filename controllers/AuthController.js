const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    
    let doesExist = await userModel.findOne({ email });

    if (doesExist) {
      res.status(400).json({ error: "User already exists!" });
      throw new Error("User already exists!");
    }

    const user = new userModel({
      email,
      password,
      firstName,
      lastName,
    });

    const salt = await bcrypt.genSalt(4);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.send("Sucess");

  } catch (err) {
    console.log(err);
  }
};
