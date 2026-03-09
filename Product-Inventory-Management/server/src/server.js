import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("API is running successfully 🚀");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));