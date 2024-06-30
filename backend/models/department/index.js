import mongoose from 'mongoose';

const { Schema } = mongoose;

const departmentSchema = new Schema(
  {
    departmentName: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    keywords: { type: String, required: true },
    agree: { type: String, default: 'false' },
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model('Department', departmentSchema);
export default Department;
