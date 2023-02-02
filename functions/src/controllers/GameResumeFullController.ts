import {Request, Response} from 'express';
import gameResumeFullService from "../services/GameResumeFullService";

const gameResumeFullController = {
    getOneBySteamGameId: (req: Request, res: Response) => {
        return gameResumeFullService.getOneBySteamGameId(req, res);
    },
    getGameByName: (req: Request, res: Response) => {
        return gameResumeFullService.getGameByName(req, res);
    }
}

export default gameResumeFullController;