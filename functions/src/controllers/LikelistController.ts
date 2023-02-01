import {Request, Response} from 'express';
import likelistService from "../services/LikelistService";

const likelistController = {
    getAll : (req: Request, res: Response) => {
        return likelistService.getAll(req, res);
    },
    getOneByUserId : (req: Request, res: Response) => {
        return likelistService.getOneByUserId(req, res);
    },
    addOne : (req: Request, res: Response) => {
        return likelistService.addOne(req, res);
    },
    updateOne : (req: Request, res: Response) => {
        return likelistService.updateOne(req, res);
    },
    deleteOne : (req: Request, res: Response) => {
        return likelistService.deleteOne(req, res);
    }
}

export default likelistController;