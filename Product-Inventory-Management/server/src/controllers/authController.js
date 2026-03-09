// Dummy authentication controller

export const registerUser = async (req, res) => {
  // Here you would normally save user to DB
  res.status(201).json({ message: "User registered successfully" });
};

export const loginUser = async (req, res) => {
  // Normally validate user and send JWT
  res.status(200).json({ message: "Login successful", token: "dummy-token" });
};

export const getProfile = async (req, res) => {
  // Protected route
  res.status(200).json({ message: "Profile fetched successfully", user: "dummy-user" });
};