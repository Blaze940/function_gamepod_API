import mongoose from "mongoose";

const reviewModel = new mongoose.Schema({
    steamGameId : String,
    steamReviewId : String,
    steamUserResume : {
        type : mongoose.Schema.Types.Subdocument,
        ref: 'SteamUserResumeModel',
    },
    description : String,
    rating : Number,
});

export default mongoose.model("ReviewModel", reviewModel);