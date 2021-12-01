requiere("dotenv").config();
let mongoose = require("mongoose");
const MONGO_DB = process.env.MONGO_DB_URI;
const DB_NAME = process.env.DB_NAME;
const MONGO_URI = `mongodb+srv://mariela16santacruz:coderhouse@cluster0.ylir7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

let connection = null; 
(async () => {
    try {
        connection = await mongoose.connect(MONGO_URI, { useNewUrlParser: true,  useUnifiedTopology: true});
        console.log("conexion a la bd successfully", connection);
    } catch(error){
        console.log(error);
    }
})();

//firebase
var admin = require("firebase-admin");
var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const machingLearning = admin.machineLearning()

module.exports = options;


