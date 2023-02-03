import {Router} from "express";
import WishlistController from "../controllers/WishlistController";

const router = Router();

router.get('/', WishlistController.getAll);
router.get('/userId/:userId', WishlistController.getOneByUserId);
router.post('/', WishlistController.addOne);
router.put('/userId/:userId', WishlistController.updateOne);
router.put('/userId/:userId/add/gameResumeId/:gameResumeId', WishlistController.addOneGameResumeId);
router.put('/userId/:userId/delete/gameResumeId/:gameResumeId', WishlistController.deleteOneGameResumeId);
router.delete('/userId/:userId', WishlistController.deleteOne);

export default router;