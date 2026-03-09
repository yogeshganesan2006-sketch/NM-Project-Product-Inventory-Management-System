export const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    // Optional: JWT verification can go here
    next();

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default protect;