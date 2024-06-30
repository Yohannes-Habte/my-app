import JWT from "jsonwebtoken";

const generateToken = (userId) => {
  const token = JWT.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
  return token;
};

export default generateToken;
