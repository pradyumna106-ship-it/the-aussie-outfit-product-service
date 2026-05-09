// models/brand.model.js

import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
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

    logo: {
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
    collection: "brands"
  }
);

const Brand = mongoose.model(
  "Brand",
  brandSchema
);

export default Brand;