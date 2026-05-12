import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (!tokenDecode.id) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    req.userId = tokenDecode.id;
    next();
    
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
