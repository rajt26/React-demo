const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Access Denied" });
  }

  try {
    const verifiedToken = jwt.verify(token, process.env.SECERET_TOKEN);
    req.user = verifiedToken;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Token is not valid" });
  }
};

module.exports = verifyToken;
