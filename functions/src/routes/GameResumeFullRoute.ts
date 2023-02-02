import {Router} from "express";
import GameResumeFullController from "../controllers/GameResumeFullController";

const router = Router();

router.get('/steamGameId/:steamGameId', GameResumeFullController.getOneBySteamGameId);

export default router;