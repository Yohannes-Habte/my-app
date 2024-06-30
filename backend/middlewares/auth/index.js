import createError from "http-errors";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

//=====================================================================
// User Auth
//=====================================================================

export const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(createError(401, "User is not authenticated!"));
    }

    let decodedToken;

    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return next(createError(401, "Token has expired. Please login again."));
      } else if (err.name === "JsonWebTokenError") {
        return next(createError(401, "Invalid token. Please login again."));
      } else {
        return next(createError(500, "Failed to authenticate token."));
      }
    }

    const user = await User.findById(decodedToken.id);
    if (!user) {
      return next(createError(403, "User is not authorized."));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(createError(500, "Internal Server Error."));
  }
};

//===========================================================
// HOD Auth
//===========================================================

export const employeeAuth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(createError(401, "User is not authenticated!"));
    }

    let decodedToken;

    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return next(createError(401, "Token has expired. Please login again."));
      } else if (err.name === "JsonWebTokenError") {
        return next(createError(401, "Invalid token. Please login again."));
      } else {
        return next(createError(500, "Failed to authenticate token."));
      }
    }

    const user = await User.findById(decodedToken.id);
    if (!user) {
      return next(createError(403, "User is not authorized."));
    }

    if (user && user.role.Employee) {
      return next();
    } else {
      return next(createError(403, "User is not authorized."));
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return next(createError(500, "An error occurred during authentication."));
  }
};

//===========================================================
// CEO Auth
//===========================================================

export const ceoAuth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(createError(401, "User is not authenticated!"));
    }

    let decodedToken;

    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return next(createError(401, "Token has expired. Please login again."));
      } else if (err.name === "JsonWebTokenError") {
        return next(createError(401, "Invalid token. Please login again."));
      } else {
        return next(createError(500, "Failed to authenticate token."));
      }
    }

    const user = await User.findById(decodedToken.id);
    if (!user) {
      return next(createError(403, "User is not authorized."));
    }

    if (user && user.role.CEO) {
      return next();
    } else {
      return next(createError(403, "User is not authorized."));
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return next(createError(500, "An error occurred during authentication."));
  }
};

//===========================================================
// CFO Auth
//===========================================================

export const cfoAuth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(createError(401, "User is not authenticated!"));
    }

    let decodedToken;

    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return next(createError(401, "Token has expired. Please login again."));
      } else if (err.name === "JsonWebTokenError") {
        return next(createError(401, "Invalid token. Please login again."));
      } else {
        return next(createError(500, "Failed to authenticate token."));
      }
    }

    const user = await User.findById(decodedToken.id);
    if (!user) {
      return next(createError(403, "User is not authorized."));
    }

    if (user && user.role.CFO) {
      return next();
    } else {
      return next(createError(403, "User is not authorized."));
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return next(createError(500, "An error occurred during authentication."));
  }
};

//===========================================================
// HOD Auth
//===========================================================

export const hodAuth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(createError(401, "User is not authenticated!"));
    }

    let decodedToken;

    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return next(createError(401, "Token has expired. Please login again."));
      } else if (err.name === "JsonWebTokenError") {
        return next(createError(401, "Invalid token. Please login again."));
      } else {
        return next(createError(500, "Failed to authenticate token."));
      }
    }

    const user = await User.findById(decodedToken.id);
    if (!user) {
      return next(createError(403, "User is not authorized."));
    }

    if (user && user.role.HOD) {
      return next();
    } else {
      return next(createError(403, "User is not authorized."));
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return next(createError(500, "An error occurred during authentication."));
  }
};
