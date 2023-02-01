import GameResumeService from "../services/GameResumeService";
import {Request,Response} from "express";

const gameResumeController = {
    getOneBySteamId: (req :Request, res :Response) => { return GameResumeService.getGameBySteamGameId(req, res) },
}

export default gameResumeController;

