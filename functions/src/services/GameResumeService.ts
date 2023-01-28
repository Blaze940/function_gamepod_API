import {Request, Response} from 'express';
import {db} from "../config/firebase"


const gameResumeService = {
    getAllGames: async (res: Response) => {

     },
    getGameBySteamId: async (req: Request, res: Response) => {
    },
    getGameResumeById: async (req: Request, res: Response) => {

    },
    getGameResumeByName: async (req: Request, res: Response) => {

    },
    updateGameResumeBySteamId: async (req: Request, res: Response) => {

    },
    deleteGameResumeBySteamId: async (req: Request, res: Response) => {

    },
    deleteGameResumeById: async (req: Request, res: Response) => {
    },
    deleteGameResumeByName: async (req: Request, res: Response) => {
    }
}

export default gameResumeService;