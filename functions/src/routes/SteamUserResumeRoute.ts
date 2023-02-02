import {Router} from "express";
import steamUserResumeController from "../controllers/SteamUserResumeController";

const router = Router();

router.get('/steamUserId/:steamUserId', steamUserResumeController.getSteamUserResumeBySteamId);

export default router;

