import mongoose from "mongoose";

const steamUserResumeSchema = new mongoose.Schema({
    steamUserId : String,
    steamUserName : String,
});

export default mongoose.model("SteamUserResume", steamUserResumeSchema);