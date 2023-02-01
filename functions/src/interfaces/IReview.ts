//import mongoose from "mongoose";

// const reviewModel = new mongoose.Schema({
//     steamGameId : String,
//     steamReviewId : String,
//     steamUserResume : {
//         type : mongoose.Schema.Types.Subdocument,
//         ref: 'SteamUserResumeModel',
//     },
//     description : String,
//     rating : Number,
// });

interface IReview {
    steamGameId : string,
    steamReviewId : string,
    steamUserResume : object,
    description : string,
    rating : number,
}

export{IReview};
