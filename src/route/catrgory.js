import express from "express";

import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getCategoryBySlug
} from "../controller/category.js";

const router = express.Router();

router.route("/")
    .get(getCategories)
    .post(createCategory)

router.route("/slug/:slug").get(getCategoryBySlug);

router.route("/:id")
    .get(getCategoryById)
    .delete(deleteCategory)
    .put(updateCategory);

export default router;