const { client } = require("../dbConnection");


const getSearchedProducts = async (req, res) => {
    const searched_name = req.params.searchedName;
  //console.log(searched_name)

    try {
        await client.connect();
        const db = client.db('aliexpress_db');  // Select the database
        const collection = db.collection(`products`);  // Select the collection

        const result = await collection.find({ Description: { $regex: searched_name, $options: "i" } }).toArray();
        return res.status(200).json(result);
        // console.log('Document fetched:', result);
    } catch (error) {
        throw error;
    }
}



module.exports = { getSearchedProducts }