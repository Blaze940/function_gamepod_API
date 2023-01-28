import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    firebaseAuthId : String,
    jwToken : String,

    wishlistId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'WishlistModel',
    },

    likelistId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'LikelistModel',
    }
});

export default mongoose.model("UserModel", userSchema);
