import mongoose from "mongoose";

const { Schema } = mongoose;

const courseRegistrationSchema = new Schema(
  {
    course: {
      courseName: { type: String, required: true },
      department: { type: String, required: true },
      category: { type: String, required: true },
      language: { type: String, required: true },
      startDate: { type: String, required: true },
      endDate: { type: String, required: true },
    },
    shippingAddress: { type: Object, required: true },
    user: { type: Object, required: true },
    coursePrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "Processing" },
    paymentInfo: {
      paymentId: { type: String },
      paymentStatus: { type: String },
      paymentType: { type: String },
    },
    paidAt: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

const Registration = mongoose.model("Registration", courseRegistrationSchema);
export default Registration;
