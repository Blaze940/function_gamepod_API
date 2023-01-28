import {Router} from "express";
import GameResumeController from "../controllers/GameResumeController";

const router = Router();

router.get('/', GameResumeController.getAll);
router.get('/steamId/:steamId', GameResumeController.getOneBySteamId);
router.get('/id/:id', GameResumeController.getOneById);
router.get('/name/:name', GameResumeController.getOneByName);
router.put('/steamId/:steamId', GameResumeController.updateBySteamId);
router.delete('/steamId/:steamId', GameResumeController.deleteBySteamId);
router.delete('/id/:id', GameResumeController.deleteById);
router.delete('/name/:name', GameResumeController.deleteByName);

export default router;

