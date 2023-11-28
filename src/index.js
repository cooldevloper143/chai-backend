import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env"
});


//comment below Code
/*
(async () => {
  try {
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error" , (err) => {
        console.log("Error connecting to DB", err);
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
})(); // effises
*/


connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  });
}).catch((err) => console.log("Error connecting to DB", err));