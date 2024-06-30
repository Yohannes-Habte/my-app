import mongoose from 'mongoose';

const { Schema } = mongoose;

const jobschema = new Schema(
  {
    jobTitle: { type: String, required: true },
    description: { type: String, required: true },
    department: { type: String, required: true },
    category: { type: String, required: true },
    education: { type: String, required: true },
    experience: { type: String, required: true },
    mandatorySkills: { type: String, required: true },
    niceToHaveSkills: { type: String, required: true },
    roleTitle: { type: String, required: true },
    responsibilites: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    benefits: { type: String, required: true },
    salary: { type: String, required: true },
    agree: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model('Job', jobschema);
export default Job;
