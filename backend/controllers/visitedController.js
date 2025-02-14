const { ObjectId } = require("mongodb");
const { client } = require("../dbConnection");


const getVisitedProducts = async (req, res) => {
    const newUserId = req.params.userId;
  //console.log(newUserId)
    try {
        await client.connect();
        const db = client.db('aliexpress_db');  // Select the database
        const collection = db.collection('visited_products');  // Select the collection

        // Insert a single document
        const result = await collection.find({userId: newUserId}).toArray();
        if(result.length && result[0].products.length !== 0){
          //console.log('Document fetched:', result[0].products);
            return res.status(200).json(result[0].products);
        }else{
            return res.status(404).json("No items present");
        }
    } catch(error){
        throw error;
    }
};

const addToVisitedProducts = async (req, res) => {
    const { userId, product } = req.body;
  //console.log(userId, product)

    await client.connect();
    const db = client.db('aliexpress_db');  // Select the database
    const collection = db.collection(`visited_products`);  // Select the collection

    try {
        const userObjectId = userId;

        // Check if the product is already in the array
        const visited = await collection.findOne({
            userId: userObjectId,
            'products.product._id': product._id,
        });

        if (visited) {
            // If already visited, return 409 Conflict
            return res.status(409).json({ message: 'Product already visited' });
        }

        // If not visited before, push a new product to the array
        await collection.updateOne(
            { userId: userObjectId },
            {
                $push: {
                    products: {
                        product: product,
                    },
                },
            },
            { upsert: true } // Create document if it doesn't exist
        );

        res.status(200).json({ message: 'Visited product saved' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}



module.exports = { addToVisitedProducts, getVisitedProducts }