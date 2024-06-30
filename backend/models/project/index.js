import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    projectTitle: { type: String, required: true },
    description: { type: String, required: true },
    objectives: { type: String, required: true },
    department: { type: String, required: true },
    category: { type: String, required: true },
    budget: { type: Number, required: true },
    ethics: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    mandatorySkills: { type: String, required: true },
    niceToHaveSkills: { type: String, required: true },
    organization: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    agree: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
