import {Router} from "express";
import GameResumeFullController from "../controllers/GameResumeFullController";

const router = Router();

router.get('/steamGameId/:steamGameId', GameResumeFullController.getOneBySteamGameId);
router.get('/gameName/:gameName', GameResumeFullController.getGameByName);

export default router;