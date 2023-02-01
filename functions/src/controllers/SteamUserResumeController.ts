import steamUserResumeService from "../services/SteamUserResumeService";
import {Request, Response } from 'express';

const steamUserResumeController = {
    getAllSteamUserResumes: async (req: Request, res: Response) => {
        return steamUserResumeService.getAllSteamUserResumes(res);
    },
    getSteamUserResumeBySteamId:  (req: Request, res: Response) => {
        return steamUserResumeService.getSteamUserResumeBySteamId(req, res);
    }
}

export default steamUserResumeController;