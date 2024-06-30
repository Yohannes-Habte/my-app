import mongoose from 'mongoose';

const { Schema } = mongoose;

const ratingSchema = new Schema(
  {
    ratingNo: { type: Number, required: true, unique: true },
    agree: { type: String },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model('Rating', ratingSchema);
export default Rating;
