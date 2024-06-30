import mongoose from 'mongoose';

const { Schema } = mongoose;

const productOrderSchema = new Schema(
  {
    cart: { type: Array, required: true },
    shippingAddress: { type: Object, required: true },
    user: { type: Object, required: true },
    productsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'Processing' },
    paymentInfo: {
      paymentId: { type: String },
      paymentStatus: { type: String },
      paymentType: { type: String },
    },
    paidAt: { type: Date, default: Date.now() },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const ProductOrder = mongoose.model('ProductOrder', productOrderSchema);
export default ProductOrder;
