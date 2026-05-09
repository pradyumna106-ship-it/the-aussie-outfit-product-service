import Brand from "../models/brand.js";


// ==============================
// CREATE BRAND
// ==============================
export const createBrand = async (req, res) => {
  try {

    const { name, description, logo } = req.body;

    // Check existing brand
    const existingBrand = await Brand.findOne({
      name: name.trim()
    });

    if (existingBrand) {
      return res.status(400).json({
        success: false,
        message: "Brand already exists"
      });
    }

    const brand = await Brand.create({
      name,
      description,
      logo
    });

    return res.status(201).json({
      success: true,
      message: "Brand created successfully",
      data: brand
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// GET ALL BRANDS
// ==============================
export const getBrands = async (req, res) => {
  try {

    const brands = await Brand.find({
      isActive: true
    });

    return res.status(200).json({
      success: true,
      count: brands.length,
      data: brands
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// GET SINGLE BRAND
// ==============================
export const getBrandById = async (req, res) => {
  try {

    const { id } = req.params;

    const brand = await Brand.findById(id);

    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: brand
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// UPDATE BRAND
// ==============================
export const updateBrand = async (req, res) => {
  try {

    const { id } = req.params;

    const updatedBrand = await Brand.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedBrand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Brand updated successfully",
      data: updatedBrand
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// DELETE BRAND
// ==============================
export const deleteBrand = async (req, res) => {
  try {

    const { id } = req.params;

    const deletedBrand = await Brand.findByIdAndDelete(id);

    if (!deletedBrand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Brand deleted successfully"
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};