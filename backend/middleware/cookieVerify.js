// import jwt from "jsonwebtoken";
// import User from "../models/userModel.js";

// export const authenticateToken = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwToken;
//     const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await User.findById(verifyToken.id).select("-password");

//     if (!user) {
//       throw new Error("user not found");
//     }
//     req.token = token;
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).send("unauthorized:no token provided");
//     console.log(error);
//   }
// };
