// import * as mongoose from "mongoose";
//
// const likelistSchema = new mongoose.Schema({
//     gamesResume : {
//         type : [{
//             type : mongoose.Schema.Types.Subdocument,
//             ref: 'GameResumeModel',
//         }]
//     },
//     userId : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref: 'UserModel',
//     }
// });

interface ILikelist {
    gamesResumeId : [string],
    userId : string,
}

export{ILikelist}