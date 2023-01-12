import clientPromise from "../../lib/mongodb";


/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
    const { id } = req.query;
    console.log({ id });
    try {
        const client = await clientPromise;
        const collection = client.db("athlete").collection("user");
        const user = await collection.findOne({ _id: id });
        console.log(user);
        res.status(200).json({ status:true, message: user });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}