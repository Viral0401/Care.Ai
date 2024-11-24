import admin from "firebase-admin";

export const userData = async (req, res) => {
  try {
    const {
      email,
      experiencingPhysicalSymptoms,
      glass,
      isolating,
      man,
      question1,
      question2,
      question3,
      usingSubstances,
    } = req.body; // Extract 'name' and 'email' from the request body

    const userData = {
      email: email,
      experiencingPhysicalSymptoms: experiencingPhysicalSymptoms,
      glass: glass,
      isolating: isolating,
      man: man,
      question1: question1,
      question2: question2,
      question3: question3,
      usingSubstances: usingSubstances,
    };

    const db = admin.firestore();
    const collectionRef = db.collection("userData"); // Replace with your actual collection name

    // Insert 'name' and 'email' into Firestore
    const docRef = await collectionRef.add(userData);

    res.json({ message: "Data inserted successfully!", docId: docRef.id });
  } catch (error) {
    console.error("Error inserting data into Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const transaction = async (req, res) => {
  try {
    const { uuid, amount, date_Time, recEmail, senderEmail } = req.body; // Extract 'name' and 'email' from the request body

    const transaction_data = {
      uuid: uuid,
      amount: amount,
      date_Time: date_Time,
      recEmail: recEmail,
      senderEmail: senderEmail,
    };

    const db = admin.firestore();
    const collectionRef = db.collection("transaction"); // Replace with your actual collection name

    // Insert 'name' and 'email' into Firestore
    const docRef = await collectionRef.add(transaction_data);

    res.json({ message: "Data inserted successfully!", docId: docRef.id });
  } catch (error) {
    console.error("Error inserting data into Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getRiskData = async (req, res) => {
  try {
    const db = admin.firestore();
    const usersRef = db.collection("risk");

    // Query Firestore to get all data
    const riskData = await usersRef.get();

    // Extract data from the documents
    const data = riskData.docs.map((doc) => doc.data());

    if (data.length === 0) {
      return res.status(404).json({ error: "No data found." });
    }

    res.json(data);
  } catch (error) {
    console.error("Error retrieving data from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserData = async (req, res) => {
  try {
    const db = admin.firestore();
    const usersRef = db.collection("userData");

    const snapshot = await usersRef.get();

    // Extract data from the documents
    const userData = snapshot.docs.map((doc) => doc.data());

    res.json(userData);
  } catch (error) {
    console.error("Error retrieving user data from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getLoanData = async (req, res) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const db = admin.firestore();
    const usersRef = db.collection("loanRequest");

    const querySnapshot = await usersRef.where("email", "!=", email).get();

    if (querySnapshot.empty) {
      return res.status(404).json({ error: "No data found." });
    }

    // Extract data from all documents
    const allUserData = querySnapshot.docs.map((doc) => doc.data());

    res.json(allUserData);
  } catch (error) {
    console.error("Error retrieving user data from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const db = admin.firestore();
    const usersRef = db.collection("loanRequest");

    const querySnapshot = await usersRef.where("email", "==", email).get();

    if (querySnapshot.empty) {
      return res.status(404).json({ error: "No data found." });
    }

    // Extract data from all documents
    const allUserData = querySnapshot.docs.map((doc) => doc.data());

    res.json(allUserData);
  } catch (error) {
    console.error("Error retrieving user data from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// git config user.name "AryanGupta2406"
// git config user.email "aryanworkgp2406@gmail.com"
