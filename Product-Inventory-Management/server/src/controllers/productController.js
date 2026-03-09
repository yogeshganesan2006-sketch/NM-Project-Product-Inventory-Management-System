import Product from "../models/Product.js";

// Create Product
export const createProduct = async (req, res) => {
  try {
    const { name, price, quantity, description } = req.body;

    const product = new Product({
      name,
      price,
      quantity,
      description,
      userId: req.body.userId
    });

    const savedProduct = await product.save();

    res.status(201).json({
      message: "Product created successfully",
      product: savedProduct
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get All Products
export const getProducts = async (req, res) => {
  try {

    const products = await Product.find();

    res.json({
      products
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update Product
export const updateProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Product updated successfully",
      product: updatedProduct
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete Product
export const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();

    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};