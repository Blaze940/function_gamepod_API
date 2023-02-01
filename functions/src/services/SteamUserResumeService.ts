import {Request, Response} from 'express';
//import SteamUserResumeModel from "../interfaces/SteamUserResumeModel";
import {db} from "../config/firebase"
import axios from "axios";
import {ISteamUserResume} from "../interfaces/ISteamUserResume";
//use this to get steamuser information "https://steamcommunity.com/actions/ajaxresolveusers?steamids="



const steamUserResumeService = {
    //INUTILE ?
    getAllSteamUserResumes: async (res: Response) => {
        try {
            const snapshot = await db.collection('steamUserResumes').get();
            const data = snapshot.docs.map(doc => doc.data());
            return res.status(200).json(data);
        } catch (err) {
            return res.status(500).json(err);
        }

    },
    //A MODIFIER AVEC STEAM API POUR USERNAME
    getSteamUserResumeBySteamId: async (req: Request, res: Response) => {
        //use this to get steamuser information "https://steamcommunity.com/actions/ajaxresolveusers?steamids=" and then use the steamid to get the user resume
                //else get it from  API
        try {
            const steamUser = await axios.get(`https://steamcommunity.com/actions/ajaxresolveusers?steamids=${req.params.steamUserId}`);
            //if already in db
            // const steamUserDb = await db.collection('steamUserResumes').where('steamUserId', '==', req.params.steamUserId).get();
            // if(!steamUserDb.empty){
            //     return res.status(200).json(steamUserDb.docs[0].data());
            // }
            //else get it from  API
            if(steamUser.data.length === 0 ){
                res.status(404).json({message: "Steam user empty"});
            }
            //user found
            const steamUserResume : ISteamUserResume = {
                steamUserId: steamUser.data[0].steamid,
                steamUserName: steamUser.data[0].persona_name
            }

            //save in db - Never use Model here
            //const steamUserResumeModel = new SteamUserResumeModel(steamUserResume);

            //INUTILE DE SAUVEGARDER DANS LA DB
            //await db.collection("steamUserResumes").doc(steamUserResume.steamUserId).set(steamUserResume);
            return res.status(200).json(steamUserResume);
        }catch(e){
            return res.status(404).json({message: "Steam user not found in steam api -> " + e});
        }
    }
}

export default steamUserResumeService;


