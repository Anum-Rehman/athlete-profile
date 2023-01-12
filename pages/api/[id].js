import clientPromise from "../../lib/mongodb";
const ObjectId = require('mongodb').ObjectId;


/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
    const { id } = req.query;
    console.log({ id });
    try {
        const client = await clientPromise;
        const db = client.db("athlete");
        const stringId = id;
        const objectId = new ObjectId(stringId);
        const user = await db.collection("user").findOne({ _id: objectId });
        // const user = await collection.findOne({ "_id": '63c010033bb1842b2e598ed0' });
        res.status(200).json({ status:true, message: user });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}