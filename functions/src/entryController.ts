// import {Response } from 'express';
// import {db} from './config/firebase'
//
//
// type EntryType = {
//     title : string,
//     text : string
// }
//
// type RequestType = {
//     body : EntryType
//     params : {
//         entryId : string
//     }
// }
//
// const addEntry = async (req : RequestType, res : Response) => {
//     const {title,text} = req.body;
//     try{
//         const entry = await db.collection('entries').doc();
//         const entryObject = {
//             id : entry.id,
//             title,
//             text
//         }
//         await entry.set(entryObject);
//         return res.status(201).json(entryObject);
//     }catch(error){
//         return res.status(500).json(error);
//     }
// }
// export {addEntry};

