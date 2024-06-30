import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    description: { type: String, required: true },
    keywords: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    images: [],
    stock: { type: Number, required: true },
    tag: { type: Number, required: true },
    department: { type: String, required: true },
    category: { type: String, required: true },
    sold_out: { type: Number, default: 0 },
    ratings: { type: Number }, // average rating
    // Single rating
    reviews: [
      {
        user: { type: Object, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        productId: { type: String, required: true },
        createdAt: { type: Date, default: Date.now() },
      },
    ],
    agree: { type: String },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
