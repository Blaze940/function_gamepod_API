import {Request, Response} from 'express';
import axios from "axios";
import {ISteamUserResume} from "../interfaces/ISteamUserResume";

const steamUserResumeService = {
    //A MODIFIER AVEC STEAM API POUR USERNAME
    getSteamUserResumeBySteamId: async (req: Request, res: Response) => {
        try {
            const steamUser = await axios.get(`https://steamcommunity.com/actions/ajaxresolveusers?steamids=${req.params.steamUserId}`);

            if(steamUser.data.length === 0 ){
                res.status(404).json({message: "Steam user empty"});
            }
            //user found
            const steamUserResume : ISteamUserResume = {
                steamUserId: steamUser.data[0].steamid,
                steamUserName: steamUser.data[0].persona_name
            }

            return res.status(200).json(steamUserResume);
        }catch(e){
            return res.status(404).json({message: "Steam user not found in steam api -> " + e});
        }
    }
}

export default steamUserResumeService;


