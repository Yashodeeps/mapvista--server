import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createProject } from "../controllers/project.controller.js";

const router = Router();
router.use(verifyJWT);

router.route("/roadmap").post(createProject);

export default router;
