// import * as mongoose from "mongoose";
//
// const gameResumeSchema = new mongoose.Schema({
//     name : String,
//     editorName : String,
//     description : String,
//     price : Number,
//     steamGameId : String,
//     reviews : {
//         type : [{
//             type : mongoose.Schema.Types.Subdocument,
//             ref: 'ReviewModel',
//         }]
//     }
// });


interface IGameResume {
    name : string,
    editorName : string,
    description : string,
    price : string,
    steamGameId : string,
    reviews : object

}

export{IGameResume};
