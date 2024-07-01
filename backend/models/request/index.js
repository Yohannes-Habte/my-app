import mongoose from "mongoose";

const { Schema } = mongoose;

const visibleToSchema = new Schema({
  role: {
    type: String,
    required: true,
    enum: ["user", "Employee", "HOD", "CFO", "CEO"],
  },
});

const requestSchema = new Schema(
  {
    requestTo: { type: String, required: true },
    subject: { type: String, required: true },
    textMessage: { type: String, required: true },
    image: { type: String, required: true },
    visibleTo: {
      type: [visibleToSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", requestSchema);
export default Request;
