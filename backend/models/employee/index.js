import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: 'https://i.ibb.co/4pDNDk1/avatar.png' },
    gender: { type: String, required: true },
    birthDate: { type: String, required: true },
    profession: { type: String, required: true },
    language: { type: String, required: true },
    phoneNumber: { type: String, required: true },

    addresses: [
      {
        addressType: { type: String, required: true },
        street: { type: String, required: true },
        country: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        zipCode: { type: String, required: true },
      },
    ],
    role: {
      type: String,
      default: 'Employee',
      enum: ['Employee', 'HOD', 'CFO', 'CEO'],
    },

    agree: { type: Boolean, required: true },
    keepMe: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Before saving the user password, encrypt it.
employeeSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
