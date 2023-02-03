import {Router} from "express";
import likelistController from "../controllers/LikelistController";

const likelistRouter = Router();

likelistRouter.get('/', likelistController.getAll);
likelistRouter.get('/userId/:userId', likelistController.getOneByUserId);
likelistRouter.post('/', likelistController.addOne);
likelistRouter.put('/userId/:userId', likelistController.updateOne);
likelistRouter.put('/userId/:userId/add/gameResumeId/:gameResumeId', likelistController.addGameResumeId);
likelistRouter.put('/userId/:userId/delete/gameResumeId/:gameResumeId', likelistController.deleteGameResumeId);
likelistRouter.delete('/userId/:userId', likelistController.deleteOne);

export default likelistRouter;

