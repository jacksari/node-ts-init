import ProjectModel from '../models/project.model';

// import slug from 'slug';
import { Project } from '../models/project.model';

const createProject = async (project: Project) => await ProjectModel.create({
  name: project.name,
  description: project.description,
});

const getProjects = async () => await ProjectModel.find();

const getProject = async (id: any) => await ProjectModel.findById(id);

export default {
  createProject,
  getProject,
  getProjects,
};
