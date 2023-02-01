// import * as mongoose from "mongoose";
//
// const userSchema = new mongoose.Schema({
//     username: String,
//     firebaseAuthId : String,
//     jwToken : String,
//
//     wishlistId : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref: 'WishlistModel',
//     },
//
//     likelistId : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref: 'LikelistModel',
//     }
// });

interface IUser {
    username: string,
    firebaseAuthId : string,
    //jwToken : string,
    wishlistId : string,
    likelistId : string,

}

export{IUser};

