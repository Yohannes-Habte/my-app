import createError from 'http-errors';
import Product from '../../models/product/index.js';

//===========================================================
// Create Product
//===========================================================
export const createProduct = async (req, res, next) => {
  const {
    productName,
    description,
    keywords,
    originalPrice,
    discountPrice,
    images,
    tags,
    department,
    category,
    stock,
    agree,
  } = req.body;
  try {
    const product = await Product.findOne({ productName });

    if (product) {
      return next(createError(400, 'Product already exists!'));
    }

    if (!product) {
      const newProduct = new Product({
        productName: productName,
        description: description,
        keywords: keywords,
        originalPrice: originalPrice,
        discountPrice: discountPrice,
        images: images,
        tags: tags,
        department: department,
        category: category,
        stock: stock,
        agree: agree,
      });

      // Save Product in the database
      try {
        await newProduct.save();
      } catch (error) {
        console.log(error);
        return next(createError(500, 'Product could not be saved'));
      }

      // Product Response
      res.status(201).json({
        success: true,
        product: newProduct,
        message: 'Product is successfully created!',
      });
    }
  } catch (error) {
    return next(createError(500, 'Product could not be created!'));
  }
};

//===========================================================
// Update Product
//===========================================================
export const updateProduct = async (req, res, next) => {};

//===========================================================
// Get Single Product
//===========================================================
export const getSingleProduct = async (req, res, next) => {};

//===========================================================
// Get All Products
//===========================================================
export const getAllProducts = async (req, res, next) => {};

//===========================================================
// Delete Single Product
//===========================================================
export const deleteSingleProduct = async (req, res, next) => {};
