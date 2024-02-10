import { Project } from "../models/project.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createProject = asyncHandler(async (req, res) => {
  const projectMap = req.body;
  const userId = req.user._id;

  if (!projectMap) {
    throw new ApiError(404, "roadmap not found");
  }

  const project = await Project.create({
    projectMap,
    user: userId,
  });

  if (!project) {
    throw new ApiError(500, "Ubable to create project");
  }

  return res.status(201).json(new ApiResponse(200, project, "Project created"));
});

export { createProject };
