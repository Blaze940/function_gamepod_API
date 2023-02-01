import {Router} from "express";
import likelistController from "../controllers/LikelistController";

const likelistRouter = Router();

likelistRouter.get('/', likelistController.getAll);
likelistRouter.get('/userId/:userId', likelistController.getOneByUserId);
likelistRouter.post('/', likelistController.addOne);
likelistRouter.put('/userId/:userId', likelistController.updateOne);
likelistRouter.delete('/userId/:userId', likelistController.deleteOne);

export default likelistRouter;

