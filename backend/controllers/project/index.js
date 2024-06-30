import createError from 'http-errors';
import Project from '../../models/project/index.js';

//===========================================================
// Create Project
//===========================================================
export const createProject = async (req, res, next) => {
  const {
    projectTitle,
    description,
    objectives,
    department,
    category,
    projectBudget,
    prjectEthics,
    startDate,
    endDate,
    mandatorySkills,
    niceToHaveSkills,
    organization,
    location,
    contact,
    agree,
  } = req.body;

  try {
    const project = await Project.findOne({ projectTitle: projectTitle });

    if (project) {
      return next(createError(500, 'Project already exist!'));
    }

    if (!project) {
      // New Project
      const newProject = new Project({
        projectTitle: projectTitle,
        description: description,
        objectives: objectives,
        department: department,
        category: category,
        budget: projectBudget,
        ethics: prjectEthics,
        startDate: startDate,
        endDate: endDate,
        mandatorySkills: mandatorySkills,
        niceToHaveSkills: niceToHaveSkills,
        organization: organization,
        location: location,
        contact: contact,
        agree: agree,
      });

      // Save it
      try {
        await newProject.save();
      } catch (error) {
        console.log(error);
        return next(createError(500, 'Project could not be saved'));
      }

      // Response will be
      res.status(201).json({
        success: true,
        project: newProject,
        message: 'Project is successfully created!',
      });
    }
  } catch (error) {
    console.log(error);
    return next(createError(500, 'Project could not be created'));
  }
};

//===========================================================
// Update Project
//===========================================================
export const updateProject = async (req, res, next) => {};

//===========================================================
// Get Single Project
//===========================================================
export const getSingleProject = async (req, res, next) => {};

//===========================================================
// Get All Projects
//===========================================================
export const getAllProjects = async (req, res, next) => {};

//===========================================================
// Delete Single Project
//===========================================================
export const deleteSingleProject = async (req, res, next) => {};
