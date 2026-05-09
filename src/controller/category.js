import Category from "../models/category.js";


// ==============================
// CREATE CATEGORY
// ==============================
export const createCategory = async (req, res) => {
  try {

    const { name, description, image } = req.body;

    // Check existing category
    const existingCategory = await Category.findOne({
      name: name.trim()
    });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category already exists"
      });
    }

    const category = await Category.create({
      name,
      description,
      image
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// GET ALL CATEGORIES
// ==============================
export const getCategories = async (req, res) => {
  try {

    const categories = await Category.find({
      isActive: true
    });

    return res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// GET SINGLE CATEGORY
// ==============================
export const getCategoryById = async (req, res) => {
  try {

    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: category
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// UPDATE CATEGORY
// ==============================
export const updateCategory = async (req, res) => {
  try {

    const { id } = req.params;

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==============================
// DELETE CATEGORY
// ==============================
export const deleteCategory = async (req, res) => {
  try {

    const { id } = req.params;

    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully"
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
