import mongoose from 'mongoose';

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    task: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    agree: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
