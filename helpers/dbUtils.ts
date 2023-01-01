import {MongoClient} from "mongodb";

export async function connectDb (){
    const client = await MongoClient.connect('mongodb+srv://admin1:admin123@cluster0.gqjgbyj.mongodb.net/nextevents?retryWrites=true&w=majority')
    return client
}

export async function insertDocument(client:MongoClient, document:any, collection:string){
    const db = client.db()
    await db.collection(collection).insertOne(document)
}
export async function getAllDocuments(client:MongoClient, collection:string, eventId:any){
    const db = client.db()
    const documents = await db
        .collection(collection)
        .find({ eventId: eventId })
        .sort({_id:-1})
        .toArray()
    return documents
}