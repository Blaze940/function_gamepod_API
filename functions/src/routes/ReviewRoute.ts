import ReviewController from "../controllers/ReviewController";
import { Router } from "express";

const router = Router();

router.get('/steamGameId/:steamGameId', ReviewController.getReviewsByGameSteamId);

export default router;