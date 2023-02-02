import GameResumeService from "../services/GameResumeLightService";
import {Request,Response} from "express";

const gameResumeLightController = {
    getOneBySteamId: (req :Request, res :Response) => { return GameResumeService.getGameBySteamGameId(req, res) },
}

export default gameResumeLightController;

