import * as mongoose from "mongoose";

const gameResumeSchema = new mongoose.Schema({
    name : String,
    editorName : String,
    description : String,
    price : Number,
    steamGameId : String,
    reviews : {
        type : [{
            type : mongoose.Schema.Types.Subdocument,
            ref: 'ReviewModel',
        }]
    }
});

export default mongoose.model("GameResumeModel", gameResumeSchema);

