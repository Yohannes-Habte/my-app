import createError from 'http-errors';
import Category from '../../models/category/index.js';

//===========================================================
// Create Category
//===========================================================
export const createCategory = async (req, res, next) => {
  const { categoryName, description, keywords, department, agree } = req.body;
  try {
    const category = await Category.findOne({ categoryName });

    if (category) {
      return next(createError(400, 'Category already exists!'));
    }

    if (!category) {
      const newCategory = new Category({
        categoryName: categoryName,
        description: description,
        keywords: keywords,
        department: department,
        agree: agree,
      });

      // Save it
      try {
        await newCategory.save();
      } catch (error) {
        return next(createError(500, 'Category could not be saved'));
      }

      // Response will be
      res.status(201).json({
        success: true,
        category: newCategory,
        message: 'Category is successfully created!',
      });
    }
  } catch (error) {
    return next(createError(500, 'Category could not be created'));
  }
};

//===========================================================
// Update Category
//===========================================================
export const updateCategory = async (req, res, next) => {};

//===========================================================
// Get Single Category
//===========================================================
export const getSingleCategory = async (req, res, next) => {};

//===========================================================
// Get All Categories
//===========================================================
export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    if (!categories) {
      return next(createError(400, 'Categories do not exists!'));
    }

    // Response will be
    res.status(200).json({
      success: true,
      categories: categories,
    });
  } catch (error) {
    return next(createError(500, 'Categories could not be accessed!'));
  }
};

//===========================================================
// Delete Single Category
//===========================================================
export const deleteSingleCategory = async (req, res, next) => {};
