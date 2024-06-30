import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderProcessSchema = new Schema(
  {
    orderProcessName: { type: String, required: true },
    department: { type: String, required: true },
    category: { type: String, required: true },
    agree: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const OrderProcess = mongoose.model('OrderProcess', orderProcessSchema);
export default OrderProcess;
