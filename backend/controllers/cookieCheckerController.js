import asyncHandler from "express-async-handler";

export const checkToken = asyncHandler(async (req, res) => {
  if (req.token) {
    res.json({
      isToken: true,
      jwtToken: req.token,
    });
  } else {
    res.json({
      isToken: false,
      jwtToken: null,
      token: req.token,
    });
  }
});
export const clearCookies = asyncHandler(async (req, res) => {
  res.clearCookie("jwToken");
  res.status(200).send("cookie cleared");
});
