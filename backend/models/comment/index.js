import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    agree: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
