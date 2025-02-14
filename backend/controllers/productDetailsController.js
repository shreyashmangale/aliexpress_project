const { client } = require("../dbConnection");


const getProduct = async (req, res) => {
    const description = req.params.Description;
    const decodedProductName = decodeURIComponent(description).replace('----', '/'); // Decode here
  //console.log(decodedProductName)
    try {
        await client.connect();
        const db = client.db('aliexpress_db');  // Select the database
        const collection = db.collection(`products`);  // Select the collection

        const result = await collection.find({Description: decodedProductName}).toArray();
        return res.status(200).json(result[0]);
        // console.log('Document fetched:', result);
    } catch (error) {
        throw error;
    }
}



module.exports = { getProduct }