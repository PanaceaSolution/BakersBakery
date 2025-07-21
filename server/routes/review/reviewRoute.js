import express from "express";
import {
  createReview,
  getApprovedReviews,
} from "../../controllers/review/reviewController.js";

const router = express.Router();

router.route("/reviews").post(createReview).get(getApprovedReviews);

export default router;
