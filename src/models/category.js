// models/category.model.js

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true
    },

    description: {
      type: String,
      default: null
    },

    image: {
      type: String,
      default: null
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    collection: "categories"
  }
);

const Category = mongoose.model(
  "Category",
  categorySchema
);

export default Category;