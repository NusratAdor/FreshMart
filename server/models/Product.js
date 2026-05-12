import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: Array, required: true },
    price: { type: Number, required: true },
    offerPrice: {
      type: Number,
      required: true,
      validate: {
        validator: function (val) {
          return val <= this.price; // offerPrice must be ≤ price
        },
        message: "Offer price must be less than or equal to original price",
      },
    },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.product || mongoose.model("product", productSchema);

export default Product;
