import express from "express";
import {
  watch,
  getUpload,
  getEdit,
  postEdit,
  postUpload,
  deleteVideo
} from "../controllers/videoController";
const videoRouter = express.Router();


videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.get("/:id([0-9a-f]{24})/edit", getEdit);
videoRouter.post("/:id([0-9a-f]{24})/edit", postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);



export default videoRouter;

