import mongoose from 'mongoose';

const { Schema } = mongoose;

const feedbackSchema = new Schema(
  {
    feedbackTo: { type: String, required: true },
    subject: { type: String, required: true },
    textMessage: { type: String, required: true },
    images: [],
    agree: { type: String },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
