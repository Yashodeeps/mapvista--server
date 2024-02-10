const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
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
