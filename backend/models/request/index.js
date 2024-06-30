import mongoose from 'mongoose';

const { Schema } = mongoose;

const requestSchema = new Schema(
  {
    requestTo: { type: String, required: true },
    subject: { type: String, required: true },
    textMessage: { type: String, required: true },
    images: [],
    agree: { type: String },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model('Request', requestSchema);
export default Request;
