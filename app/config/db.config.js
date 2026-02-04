const mongoose = require("mongoose");

async function connectDB(mongoUri) {
    if (!mongoUri) throw new Error("MONGO_URI is not set");

    mongoose.set("strictQuery", true);

    await mongoose.connect(mongoUri, {
        autoIndex: true,
    });

    console.log("MongoDB connected");
}

module.exports = { connectDB };
