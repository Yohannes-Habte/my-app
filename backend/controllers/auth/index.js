import createError from "http-errors";
import bcrypt from "bcryptjs";
import User from "../../models/user/index.js";

//===========================================================
// Register a new user in the database
//===========================================================
export const createUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (user) {
      return next(
        createError(400, "User already exist. Please try another email!")
      );
    }

    if (!user) {
      const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      // Save user in the database
      try {
        await newUser.save();
      } catch (error) {
        console.log(error);
        return next(createError(500, "User could not be saved"));
      }

      res.status(201).json({
        success: true,
        user: newUser,
        message: "User account is successfully created!",
      });
    }
  } catch (error) {
    console.log(error);
    next(createError(500, "User could not sign up. Please try again!"));
  }
};

//===========================================================
// Log in a register user in the database
//===========================================================
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return next(
        createError(400, "This email does not exist. Please sign up!")
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return next(createError(400, "Invalid password! Please try again."));
    }

    if (user && isPasswordValid) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json({
        success: true,
        user: otherDetails,
        message: "User has successfully logged in!",
      });
    }
  } catch (error) {
    next(createError(500, "User could not log in. Please try again!"));
  }
};

//=====================================================================
// Update User Profile
//=====================================================================
export const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      user.firstName = req.body.firstName || user.firstName;
      user.lastName = req.body.lastName || user.lastName;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;

      const updatedUser = await user.save();
      return res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return next(
      createError(500, "Database could not queried. Please try again!")
    );
  }
};

//===========================================================
// Owner and admin has mandate to update user details
//===========================================================
export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(createError(400, "User could not be updated. Please try again!"));
  }
};
