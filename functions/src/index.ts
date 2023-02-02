import * as functions from "firebase-functions";
import * as express from "express";
import SteamUserResumeRouter from "./routes/SteamUserResumeRoute";
import ReviewRouter from "./routes/ReviewRoute";
import GameResumeLightRouter from "./routes/GameResumeLightRoute";
import GameResumeFullRouter from "./routes/GameResumeFullRoute";
import WishlistRouter from "./routes/WishlistRoute";
import LikelistRouter from "./routes/LikelistRoute";
import UserRouter from "./routes/UserRoute";

const app  = express();

app.use('/steamUserResumes', SteamUserResumeRouter);
app.use('/reviews', ReviewRouter);
app.use('/gamesLight', GameResumeLightRouter);
app.use('/gamesFull', GameResumeFullRouter);
app.use('/wishlists', WishlistRouter);
app.use('/likelists', LikelistRouter);
app.use('/users', UserRouter);
//app.use('/gamesFull', GameResumeFullRouter);

app.use('/', (req, res) => {
    res.status(200).send(' Gamepod API is working ...');
})

exports.app = functions.https.onRequest(app);



