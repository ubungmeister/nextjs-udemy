import {NextApiRequest, NextApiResponse} from "next";
import test from "node:test";
import {MongoClient} from "mongodb";
import {connectDb, getAllDocuments, insertDocument} from "../../../helpers/dbUtils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let client
    const collection = 'comments'
    try{
        client = await connectDb()
    }catch (err){
        res.status(500).json({message:'Connecting is failed'})
        return
    }
    const eventId = req.query.commentId

    if(req.method ==='POST'){
        const {email, name, text} = req.body
        if(!email ||
            !email.includes('@')||
            !name ||
            name.trim() === ''){
            res.status(400).json({ message: 'Something is wrong' })
            return
        }
        const newComment = {
            email,
            name,
            text,
            eventId
        }
        try {
            await insertDocument(client,newComment,collection)
        }catch (err){
            res.status(500).json({message:'Inserting data is failed'})
            return
        }
        // const eventsCollection = client.db().collection('comments')
        //  const result = await eventsCollection.insertOne(newComment)

        res.status(200).json({ name: 'Success' })
    }

    if(req.method === 'GET'){
        let doc
        try {
            doc = await getAllDocuments(client, collection, eventId)
        }catch (err){
            res.status(500).json({ name: 'Get comments Failed' })
            return
        }

        // const db = client.db()
        // const documents = await db
        //     .collection('comments')
        //     .find({ eventId: eventId })
        //     .sort({_id:-1})
        //     .toArray()
        res.status(200).json({comments:doc})
    }
    await client.close()
}