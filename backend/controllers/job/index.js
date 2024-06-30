import createError from 'http-errors';
import Job from '../../models/job/index.js';

//===========================================================
// Create Job
//===========================================================
export const createJob = async (req, res, next) => {
  const {
    jobTitle,
    description,
    department,
    category,
    education,
    experience,
    mandatorySkills,
    niceToHaveSkills,
    roleTitle,
    responsibilites,
    location,
    contact,
    benefits,
    salary,
    agree,
  } = req.body;

  try {
    const job = await Job.findOne({ jobTitle: jobTitle });

    if (job) {
      return next(createError(400, 'Job already exists!'));
    }

    if (!job) {
      const newJob = new Job({
        jobTitle: jobTitle,
        description: description,
        department: department,
        category: category,
        education: education,
        experience: experience,
        mandatorySkills: mandatorySkills,
        niceToHaveSkills: niceToHaveSkills,
        roleTitle: roleTitle,
        responsibilites: responsibilites,
        location: location,
        contact: contact,
        benefits: benefits,
        salary: salary,
        agree: agree,
      });

      // Save it
      try {
        await newJob.save();
      } catch (error) {
        return next(createError(500, 'Job could not be saved'));
      }

      // Response will be
      res.status(201).json({
        success: true,
        job: newJob,
        message: 'Job is successfully created!',
      });
    }
  } catch (error) {
    return next(createError(500, 'Job could not be created'));
  }
};

//===========================================================
// Update Job
//===========================================================
export const updateJob = async (req, res, next) => {};

//===========================================================
// Get Single Job
//===========================================================
export const getSingleJob = async (req, res, next) => {};

//===========================================================
// Get All Jobs
//===========================================================
export const getAllJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    if (!jobs) {
      return next(createError(400, 'Job already exists!'));
    }

    // Response will be
    res.status(200).json({
      success: true,
      job: jobs,
    });
  } catch (error) {
    return next(createError(500, 'Jobs could not be accessed!'));
  }
};

//===========================================================
// Delete Single Job
//===========================================================
export const deleteSingleJob = async (req, res, next) => {};
