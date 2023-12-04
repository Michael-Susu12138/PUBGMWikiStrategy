// authController.mjs
import bcrypt from "bcrypt";
import passport from "passport";
import User from "../models/User.mjs";

const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ status: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const loginUser = passport.authenticate("local", {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
  failureFlash: true, // Optional, for flash messages
});

const logoutUser = (req, res) => {
  req.logout();
  res.redirect("/login");
};

export { registerUser, loginUser, logoutUser };
