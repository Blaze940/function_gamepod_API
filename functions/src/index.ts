import * as functions from "firebase-functions";
import * as express from "express";
// import cors from "cors";
import SteamUserResumeRouter from "./routes/SteamUserResumeRoute";
import ReviewRouter from "./routes/ReviewRoute";
import GameResumeRouter from "./routes/GameResumeRoute";
import WishlistRouter from "./routes/WishlistRoute";
import LikelistRouter from "./routes/LikelistRoute";
import UserRouter from "./routes/UserRoute";
//import {addEntry} from "./entryController";

const app  = express();
// app.use(cors()) ;
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.status(200).send(' Everything is working ...');
// })

app.use('/steamUserResumes', SteamUserResumeRouter);
app.use('/reviews', ReviewRouter);
app.use('/games', GameResumeRouter);
app.use('/wishlists', WishlistRouter);
app.use('/likelists', LikelistRouter);
app.use('/users', UserRouter);

//Put root route at the end due to
app.use('/', (req, res) => {
    res.status(200).send(' Everything is working ...');
})
//test
//app.post('/entries', addEntry);

exports.app = functions.https.onRequest(app);



