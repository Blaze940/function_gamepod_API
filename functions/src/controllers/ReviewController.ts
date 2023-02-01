import reviewService from "../services/ReviewService";
import {Request, Response } from 'express';

const reviewController = {
    getReviewsByGameSteamId:  (req: Request, res: Response) => {
        return reviewService.getReviewsByGameSteamId(req, res);
    }
}

export default reviewController;