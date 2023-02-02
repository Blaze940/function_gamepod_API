import {Router} from "express";
import GameResumeController from "../controllers/GameResumeLightController";

const router = Router();

router.get('/steamGameId/:steamGameId', GameResumeController.getOneBySteamId);


export default router;

