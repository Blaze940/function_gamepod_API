import {Request, Response} from 'express';
import axios from "axios";
import {IGameResume} from "../interfaces/IGameResume";
// import {db} from "../config/firebase"
// import IGameResume from "../interfaces/IGameResume";

//use this link for get reviews "https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/reviews/steamGameId"

const gameResumeService = {
    getGameBySteamGameId: async (req: Request, res: Response) => {
        try {
            const gameResume = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${req.params.steamGameId}`);
            const gameResumeReceived = gameResume.data[req.params.steamGameId].data;
            if(gameResumeReceived === undefined){
                return res.status(404).json({message: "Game not found"});
            }
            
            let gameSelf : IGameResume = {
                name: gameResumeReceived.name,
                editorName: gameResumeReceived.developers[0],
                description: gameResumeReceived.short_description,
                //if gameResumeReceived.price_overview is undefined, then the game is free
                price: gameResumeReceived.price_overview === undefined ? "Free" : gameResumeReceived.price_overview.final_formatted.replace(/[^\d.,]/g, ""),
                steamGameId: req.params.steamGameId,
                reviews: []
            }
            await axios.get(`https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/reviews/steamGameId/${req.params.steamGameId}`)
                .then((response) => {
                    let game  = {
                        steamGameId: gameResumeReceived.steam_appid,
                        name: gameResumeReceived.name,
                        description: gameResumeReceived.short_description,
                        editorName: gameResumeReceived.publishers[0],
                        price: gameResumeReceived.price_overview === undefined ? "Free" : gameResumeReceived.price_overview.final_formatted.replace(/[^\d.,]/g, ""),
                        reviews: response.data,
                    }
                    gameSelf = game;
                    return res.status(200).json(game);
                })
                .catch((error) => {
                    return res.status(404).json({message: "Reviews for game " + gameResumeReceived.name + " not found -> " + error});
                });
            return res.status(200).json(gameSelf);
        }catch(e){
            return res.status(404).json({message: "Sorry ... Game not found --> " + e});
        }
    },
}

export default gameResumeService;