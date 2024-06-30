import mongoose from 'mongoose';

const { Schema } = mongoose;

const roleSchema = new Schema(
  {
    roleName: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    keywords: { type: String, required: true },
    department: { type: String, required: true },
    agree: { type: String },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model('Role', roleSchema);
export default Role;
