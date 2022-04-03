
//needed to move batchimport and env to backend
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const assert = require('assert');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
//get data
const companies = require("./data/companies.json")
const items = require("./data/items.json")

//how to organize the data
//put data into iterable array {} to []
// flightData = [];
// Object.keys(flights).map((flight) => {
//     return flightData[flightData.length]={
//         _id: flight,
//         seats: flights[flight]
//     };
// });

const batchImport = async () => {
    const client = await new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("Ecommerce_groupproject");
        console.log("Connected");
    try {
        const itemsCollection = await db.collection("items").insertMany(items);
        // assert.equal(itemsCollection.length, itemsCollection.insertedCount);
        console.log("success");
        const companiesCollection = await db.collection("companies").insertMany(companies);
        // assert.equal(companies.length, reservationCollection.insertedCount);
        console.log("success2");
    } catch (err) {
        console.log(err);
    }
    client.close();
    console.log("disconnected!");
};
batchImport();
