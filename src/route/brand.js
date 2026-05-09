import express from "express";

import {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
  deleteBrand
} from "../controller/brand.js"

const router = express.Router();

router.route("/")
    .get(getBrands)
    .post(createBrand)

router.route("/:id")
    .get(getBrandById)
    .delete(deleteBrand)
    .put(updateBrand);

export default router;