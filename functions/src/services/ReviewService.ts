import {Request, Response} from 'express';
import axios from "axios";
import  {IReview} from "../interfaces/IReview";
//import {db} from "../config/firebase";



//use this link to get steamUserResume "https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/steamUserResumes/steamUserId/userId"
const reviewService = {
    //give as a request a gameSteamId, extract only data that reviewModel has and return all the reviews of this game.Use the getReviews function
    getReviewsByGameSteamId: async (req: Request, res: Response) => {
        try {
            const reviewsGame = await axios.get(`https://store.steampowered.com/appreviews/${req.params.steamGameId}?json=1`);
            const reviews = reviewsGame.data.reviews;
            const reviewsToSend : IReview[] = [];
            for(let i = 0; i < reviews.length; i++){
                let review = reviews[i];
                //check if steamId is not empty
                if(review.author.steamid !== "") {
                    await axios.get(`https://us-central1-androidsteam-b9b14.cloudfunctions.net/app/steamUserResumes/steamUserId/${review.author.steamid}`)
                        .then((response) => {
                            let reviewSelf = {
                                steamUserResume: response.data,
                                steamGameId: req.params.steamGameId,
                                steamReviewId: review.recommendationid,
                                description: review.review,
                                rating: review.votes_up,
                            }
                            reviewsToSend.push(reviewSelf);
                        }).catch((error) => {
                            return res.status(404).json({message: "Steam UserResume not found in steam api -> " + error});
                        });
                }else{
                    return res.status(404).json({message: "UserResume not found "});
                }
                //save in db
                //  for(let i = 0; i < reviewsToSend.length; i++){
                //     await db.collection("reviews").doc(reviewsToSend[i].steamReviewId).set(reviewsToSend[i]);
                //  }
            }
            return res.status(200).json(reviewsToSend);

        }catch(e){
            return res.status(404).json({message: "Reviews not found -> " + e});
        }
    }
}

export default reviewService;
