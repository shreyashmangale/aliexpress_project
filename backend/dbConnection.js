const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();


const uri = process.env.MONGODB_CONNECTION;

if (!uri) {
    console.error("MongoDB URI is missing in .env file.");
    process.exit(1);
}

// Create a MongoClient instance
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function connectDB() {
    try {
        if (!client.topology || !client.topology.isConnected()) {
            await client.connect();
          //console.log("Connected to MongoDB Atlas");
        }
        return client;
    } catch (error) {
        //console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1);
    }
}

connectDB();

process.on('SIGINT', async () => {
    try {
        await client.close();
    //   console.log('MongoDB connection successfully closed.');
        process.exit(0);
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
        process.exit(1);
    }
});

module.exports = { connectDB, client };
