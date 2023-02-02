import {Request, Response } from 'express';
import {IGameResumeFull} from "../interfaces/IGameResumeFull";
import {GameSearchType} from "../interfaces/GameSearchType";
import axios from "axios";


//use https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/gamesLight/steamGameId/730
const gameResumeFullService = {
    getOneBySteamGameId: async (req: Request, res: Response) => {
        try{
            const gameResume = await axios.get(`https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/gamesLight/steamGameId/${req.params.steamGameId}`)
            const gameResumeReceived = gameResume.data;
            if(gameResumeReceived === undefined){
                return res.status(404).json({message: "Game not found"});
            }
            let gameSelf : IGameResumeFull = {
                name: gameResumeReceived.name,
                editorName: gameResumeReceived.editorName,
                description: gameResumeReceived.description,
                price: gameResumeReceived.price,
                steamGameId: gameResumeReceived.steamGameId,
                reviews: gameResumeReceived.reviews,
                logoURL : "",
                iconURL : "",
            }
            //use https://steamcommunity.com/actions/SearchApps/Nom%20Du%20Jeu
            await axios.get(`https://steamcommunity.com/actions/SearchApps/${gameResumeReceived.name}`)
                .then((response) => {
                    let game  = {
                        steamGameId: gameResumeReceived.steamGameId,
                        name: gameResumeReceived.name,
                        description: gameResumeReceived.description,
                        editorName: gameResumeReceived.editorName,
                        price: gameResumeReceived.price,
                        reviews: gameResumeReceived.reviews,
                        logoURL : response.data[0].logo,
                        iconURL : response.data[0].icon,
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
    getGameByName: async (req: Request, res: Response) => {
        try {
            const gamesResume  = await axios.get(`https://steamcommunity.com/actions/SearchApps/${req.params.gameName}`) ;
            const gamesResumeReceived : [GameSearchType] = gamesResume.data;
            if(gamesResumeReceived === undefined){
                return res.status(404).json({message: "Games not found"});
            }
            //Get all ids of games
            const gamesId : string[] = [];
            for(let i = 0; i < gamesResumeReceived.length; i++){
                gamesId.push(gamesResumeReceived[i].appid);
            }

            //Get all games
            const gamesToSend : IGameResumeFull[] = [];
            for(let i = 0; i < gamesId.length; i++){
                await axios.get(`https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/gamesFull/steamGameId/${gamesId[i]}`)
                    .then((response) => {
                        let game = {
                            steamGameId: response.data.steamGameId,
                            name: response.data.name,
                            description: response.data.description,
                            editorName: response.data.editorName,
                            price: response.data.price,
                            reviews: response.data.reviews,
                            logoURL : response.data.logoURL,
                            iconURL : response.data.iconURL,
                        }
                        gamesToSend.push(game);
                    })
                    .catch((error) => {
                        return res.status(404).json({message: "Game not found -> " + error});
                    });
            }
            return res.status(200).json(gamesToSend);
        }catch(e){
            return res.status(404).json({message: "Sorry ... Games not found --> " + e});
        }
    }
}

export default gameResumeFullService;