import GameResumeService from "../services/GameResumeService";
import {Request,Response} from "express";

const gameResumeController = {
    getAll: (req :Request, res :Response) => { return GameResumeService.getAllGames(res)},
    getOneBySteamId: (req :Request, res :Response) => { return GameResumeService.getGameBySteamId(req, res) },
    getOneById: (req :Request, res :Response) => { return GameResumeService.getGameResumeById(req, res) },
    getOneByName : (req :Request, res :Response) => { return GameResumeService.getGameResumeByName(req, res) },
    updateBySteamId: (req :Request, res :Response) => { return GameResumeService.updateGameResumeBySteamId(req, res)},
    deleteBySteamId : (req :Request, res :Response) => { return GameResumeService.deleteGameResumeBySteamId(req, res) },
    deleteById : (req :Request, res :Response) => { return GameResumeService.deleteGameResumeById(req, res) },
    deleteByName : (req :Request, res :Response) => { return GameResumeService.deleteGameResumeByName(req, res) },
}

export default gameResumeController;

