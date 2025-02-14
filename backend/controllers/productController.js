const { client } = require("../dbConnection");


const getProducts = async (req, res) => {
    const category = req.params.category;
  //console.log("category", category)

    try {
        await client.connect();
        const db = client.db('aliexpress_db');  // Select the database
        const collection = db.collection(`${category}`);  // Select the collection

        const result = await collection.find({}).toArray();
        return res.status(200).json(result);
        // console.log('Document fetched:', result);
    } catch (error) {
        throw error;
    }
}



module.exports = { getProducts }