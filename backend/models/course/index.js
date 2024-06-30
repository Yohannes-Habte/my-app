import mongoose from 'mongoose';

const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    courseName: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    department: { type: String, required: true },
    category: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    language: { type: String, require: true },
    tag: { type: Number, required: true },
    sold_out: { type: Number, default: 0 },
    ratings: { type: Number }, // average rating
    // Single rating
    reviews: [
      {
        user: { type: Object, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        courseId: { type: String, required: true },
        createdAt: { type: Date, default: Date.now() },
      },
    ],
    agree: { type: String },
  },

  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;
