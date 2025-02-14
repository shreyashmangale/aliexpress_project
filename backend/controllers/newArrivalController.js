const { client } = require("../dbConnection");

const getNewArrivals = async (req, res) => {

    try {
        await client.connect();
        const db = client.db('aliexpress_db');  // Select the database
        const collection = db.collection(`new_arrivals`);  // Select the collection

        const result = await collection.find({}).toArray();
        // function getRandomItems(arr, num) {
        //     const shuffled = arr.sort(() => 0.5 - Math.random()); // Shuffle array
        //     return shuffled.slice(0, num); // Get first 'num' items
        // }
        // const randomSelected = await getRandomItems(result, 50);
        // console.log("randomSelected",randomSelected)
      //console.log('Document fetched:', result);
        return res.status(200).json(result.slice(0,50));
    } catch (error) {
        throw error;
    }
}

module.exports = { getNewArrivals }