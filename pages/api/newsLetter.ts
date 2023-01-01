import {NextApiRequest, NextApiResponse} from "next";
import {MongoClient} from "mongodb";
import {connectDb, insertDocument} from "../../helpers/dbUtils";


// async function connectDb (){
//     const client = await MongoClient.connect('mongodb+srv://admin1:admin123@cluster0.gqjgbyj.mongodb.net/nextevents?retryWrites=true&w=majority')
//     return client
// }
//
// async function insertDocument(client:any, document:any){
//     const db = client.db()
//     await db.collection('newsletter').insertOne(document)
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
)

{   if(req.method === 'POST'){
    const userEmail = req.body.email
    if(!userEmail || !userEmail.includes('@')){
        res.status(400).json({ message: 'Email is wrong' })
        return
    }
    let client
    const collection ='newsletter'
    try{
         client = await connectDb()
    }catch (err){
        res.status(500).json({message:'Connecting is failed'})
        return
    }
    try {
        await insertDocument(client,{email: userEmail},collection)
         client?.close()
        //{email: userEmail} - we need to send an object to the server, not string etc. !!!
    }catch (err){
        res.status(500).json({message:'Inserting data is failed'})
        return
    }
    res.status(200).json({ name: 'Success' })
}

}

