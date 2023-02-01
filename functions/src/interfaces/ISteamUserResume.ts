// import mongoose from "mongoose";
//
// const steamUserResumeSchema = new mongoose.Schema({
//     steamUserId : String,
//     steamUserName : String,
// });

interface ISteamUserResume {
    steamUserId : string,
    steamUserName : string,
}

export{ISteamUserResume};