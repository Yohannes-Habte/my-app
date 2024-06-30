import mongoose from 'mongoose';

const { Schema } = mongoose;

const backgroundCheckSchema = new Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: String, required: true },
    gender: { type: String, required: true },
    socialSecurityNo: { type: String, required: true },
    driverLicenseNo: { type: String, required: true },
    employmentType: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    street: { type: String, required: true },
    street: { type: String, required: true },
    zipCode: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    employeeId: { type: String, required: true },
    role: {
      type: String,
      default: 'customer',
      enum: ['customer', 'employee', 'financeManager', 'HOD', 'CEO'],
    },

    agree: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const BackgroundCheck = mongoose.model(
  'BackgroundCheck',
  backgroundCheckSchema
);
export default BackgroundCheck;
