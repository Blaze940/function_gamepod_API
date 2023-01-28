import * as functions from "firebase-functions";
import * as express from "express";
//import {addEntry} from "./entryController";

const app  = express();

app.get('/', (req, res) => {
    res.status(200).send(' Everything is working ...');
})

//test
//app.post('/entries', addEntry);

exports.app = functions.https.onRequest(app);


