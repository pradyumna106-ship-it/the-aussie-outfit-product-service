import Category from "../models/category.js";


// =====================================
// CREATE CATEGORY
// =====================================
export const createCategory = async (req, res) => {
  try {

    const {
      name,
      description,
      image,
      subCategories
    } = req.body;

    // Generate slug
    const slug = name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    // Check existing category
    const existingCategory = await Category.findOne({
      $or: [
        { name: name.trim() },
        { slug }
      ]
    });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category already exists"
      });
    }

    // Generate subcategory slugs
    const formattedSubCategories =
      subCategories?.map((sub) => ({
        name: sub.name,
        slug: sub.name
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-"),
        image: sub.image || null
      })) || [];

    const category = await Category.create({
      name: name.trim(),
      slug,
      description,
      image,
      subCategories: formattedSubCategories
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


// =====================================
// GET ALL CATEGORIES
// =====================================
export const getCategories = async (req, res) => {
  try {

    const categories = await Category.find({
      isActive: true
    }).sort({ name: 1 });

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


// =====================================
// GET CATEGORY BY ID
// =====================================
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


// =====================================
// GET CATEGORY BY SLUG
// =====================================
export const getCategoryBySlug = async (req, res) => {
  try {

    const { slug } = req.params;

    const category = await Category.findOne({
      slug,
      isActive: true
    });

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


// =====================================
// UPDATE CATEGORY
// =====================================
export const updateCategory = async (req, res) => {
  try {

    const { id } = req.params;

    const updateData = { ...req.body };

    // Update slug if category name changes
    if (updateData.name) {
      updateData.slug = updateData.name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");
    }

    // Update subcategory slugs
    if (updateData.subCategories) {
      updateData.subCategories =
        updateData.subCategories.map((sub) => ({
          name: sub.name,
          slug: sub.name
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-"),
          image: sub.image || null
        }));
    }

    const updatedCategory =
      await Category.findByIdAndUpdate(
        id,
        updateData,
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


// =====================================
// DELETE CATEGORY
// =====================================
export const deleteCategory = async (req, res) => {
  try {

    const { id } = req.params;

    const deletedCategory =
      await Category.findByIdAndUpdate(
        id,
        {
          isActive: false
        },
        {
          new: true
        }
      );

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