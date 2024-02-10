import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  //   getUserProfile,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  // updateUserAvatar,
} from "../controllers/user.controller.js";
// import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/upadte-account").patch(verifyJWT, updateAccountDetails);
// router
//     .route("/update-avater")
//     .post(verifyJWT, upload.single("avatar"), updateUserAvatar);
// router.route("/u/:username").get(verifyJWT, getUserProfile);
//above we are taking data from params so above syntax is used, we have used "username" in controller so use use username here

export default router;
