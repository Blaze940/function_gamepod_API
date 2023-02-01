import {Router} from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get('/', UserController.getAll);
router.get('/userId/:userId', UserController.getOneByUserId);
router.get('/username/:username', UserController.getOneByUserName);
router.post('/', UserController.addOne);
router.put('/userId/:userId', UserController.updateOne);
router.delete('/userId/:userId', UserController.deleteOne);

export default router;