const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        brandName: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        discount: { type: Number, required: true },
        sizes: [{ type: String, required: false }], // sizes: ["1-2Y"],
        color: { type: String, required: false },
        gender: { type: String, required: true },
      },
      {
        versionKey: false,
        timestamp: true,
      }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;