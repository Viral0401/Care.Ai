import express from "express";
import admin from "firebase-admin";
import {
  getLoanData,
  getRiskData,
  getUser,
  getUserData,
  transaction,
  userData,
} from "./controllers.mjs";

// Import the service account key
const serviceAccount =
  "./synergy-35091-firebase-adminsdk-lyl17-b81aa92e14.json";

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Create an Express app
const app = express();
const port = 5500; // or your desired port

app.use(express.json());

// Define a sample endpoint
app.get("/api/sample", (req, res) => {
  res.json({ message: "Hello, this is a sample endpoint!" });
});

// Define an endpoint that interacts with Firestore
app.post("/addUserData", userData); // post

app.post("/transfer", transaction);

app.get("/getRisk/", getRiskData);

app.get("/getUserData", getUserData); // get

app.get("/getLoanRequest/:email", getLoanData);

app.get("/getUserData/:email", getUser);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
