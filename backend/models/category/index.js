import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    categoryName: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    keywords: { type: String, required: true },
    department: { type: String, required: true },
    agree: { type: String },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('Category', categorySchema);
export default Category;
