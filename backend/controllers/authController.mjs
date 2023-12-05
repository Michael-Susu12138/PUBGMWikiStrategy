import bcrypt from "bcrypt";
import passport from "passport";
import User from "../models/User.mjs";

const registerUser = async (req, res) => {
  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(409).json({ message: "Username is already taken" });
    }

    // If the username doesn't exist, proceed with creating a new user
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error registering new user" });
  }
};

const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      // If user is not found or password does not match
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      // Successfully authenticated, send user info or a success message
      return res.status(200).json({ message: "Logged in successfully" });
    });
  })(req, res, next);
};

const logoutUser = (req, res) => {
  req.logout();
  // Don't redirect; instead send a JSON response for the client to handle
  res.status(200).json({ message: "Logged out successfully" });
};

export { registerUser, loginUser, logoutUser };
