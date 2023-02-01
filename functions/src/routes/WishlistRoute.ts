import {Router} from "express";
import WishlistController from "../controllers/WishlistController";

const router = Router();

router.get('/', WishlistController.getAll);
router.get('/userId/:userId', WishlistController.getOneByUserId);
router.post('/', WishlistController.addOne);
router.put('/userId/:userId', WishlistController.updateOne);
router.delete('/userId/:userId', WishlistController.deleteOne);

export default router;