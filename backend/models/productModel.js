import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    url: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: { type: String, required: true },
    currentPrice: {
      type: Number,
      required: true,
    },
    centsAmount: {
      type: Number,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    priceHistory: [
      {
        price: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    lowestPrice: {
      type: Number,
    },
    highestPrice: {
      type: Number,
    },
    averagePrice: {
      type: Number,
    },
    discountRate: {
      type: Number,
    },
    description: { type: String },
    category: { type: String },
    reviewsCount: { type: Number },
    outOfStock: { type: Boolean },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productSchema, "Products");

export default Products;
