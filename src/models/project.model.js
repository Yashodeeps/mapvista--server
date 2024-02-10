import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    projectMap: {
      type: Object,
    },
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
