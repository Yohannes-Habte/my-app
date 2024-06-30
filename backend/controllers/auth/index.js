import createError from "http-errors";
import bcrypt from "bcryptjs";
import User from "../../models/user/index.js";
import generateToken from "../../middlewares/token/index.js";

//===========================================================
// Register a new user in the database
//===========================================================
export const createUser = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    gender,
    birthDate,
    profession,
    language,
    phoneNumber,
    image,
    agree,
  } = req.body;
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
        gender: gender,
        birthDate: birthDate,
        profession: profession,
        language: language,
        phoneNumber: phoneNumber,
        image: image,
        agree: agree,
      });

      // Save user in the database
      try {
        await newUser.save();
      } catch (error) {
        console.log(error);
        return next(createError(500, "Something went wrong"));
      }

      // Generate token for a user
      const token = generateToken(newUser._id);

      res
        .cookie("access_token", token, {
          path: "/",
          httpOnly: true,
          expires: new Date(Date.now() + 3 * 60 * 60 * 1000),
          sameSite: "none",
          secure: true,
        })
        .status(201)
        .json({
          success: true,
          user: newUser,
          message: "User account is successfully created!",
        });
    }
  } catch (error) {
    console.log(error);
    next(createError(500, "Server Error!"));
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

      // User token
      const token = generateToken(user._id);

      res
        .cookie("access_token", token, {
          path: "/",
          httpOnly: true,
          expires: new Date(Date.now() + 3 * 60 * 60 * 1000),
          sameSite: "none",
          secure: true,
        })
        .status(200)
        .json({
          success: true,
          user: { ...otherDetails },
          message: "User successfully logged in!",
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
  const {
    firstName,
    lastName,
    gender,
    birthDate,
    profession,
    language,
    phoneNumber,
    image,
    agree,
  } = req.body;
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(createError(400, "User not found"));
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.gender = gender || user.gender;
    user.image = image || user.image;
    user.birthDate = birthDate || user.birthDate;
    user.profession = profession || user.profession;
    user.language = language || user.language;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.agree = agree || user.agree;

    try {
    } catch (error) {
      console.log(error);
      return next(createError(500, "Update could not be saved!"));
    }

    return res.status(201).json({
      success: true,
      user: user,
      message: "User account successfully updated!",
    });
  } catch (error) {
    console.log(error);
    return next(
      createError(500, "Database could not queried. Please try again!")
    );
  }
};
