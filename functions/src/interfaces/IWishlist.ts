//import * as mongoose from "mongoose";
//
// const wishlistSchema = new mongoose.Schema({
//
//     gamesResumeId : {
//         type : [{
//             type : mongoose.Schema.Types.ObjectId,
//             ref: 'GameResumeModel',
//         }]
//     },
//     userId : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref: 'UserModel',
//     }
// });

interface IWishlist {
    gamesResumeId : Array<string>,
    userId : string,
}

export{IWishlist};