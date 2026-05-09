// routes/product.routes.js

import express from "express";

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.js";

const router = express.Router();

router.route("/")
  .get(getProducts)
  .post(createProduct)

router.route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct)

export default router;