const mongoose = require('mongoose');

mongoose.connect( process.env.MONGO_DB_URL ,{
      dbName: process.env.DB_NAME,
}).then(() => {
      console.log("MongoDB connected successfully");
}).catch((error) => {
      console.error("MongoDB connection error:", error.message);
})