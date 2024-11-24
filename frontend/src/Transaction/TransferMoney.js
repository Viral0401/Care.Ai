import React, { useState } from "react";
import { UserAuth } from "../FirebaseAuthContext/AuthContext";
import { database } from "../TransactionFirebase";
import { set, ref } from "firebase/database";
import { uid } from "uid";

const TransferMoney = () => {
  const { user } = UserAuth();
  const [amount, setAmount] = useState("");
  const [recEmail, setRecEmail] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleRecEmailChange = (e) => {
    setRecEmail(e.target.value);
  };

  // Client-side code (TransferMoney.js)

  const writeToDatabase = async () => {
    const uuid = uid();
    const payload = {
      uuid: uuid,
      amount: amount,
      date_Time: new Date().toLocaleString(),
      recEmail: recEmail,
      senderEmail: user?.email,
    };

    try {
      const response = await fetch("/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Data sent successfully");
        setAmount("");
        setRecEmail("");
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full p-10">
      <h1 className="text-5xl font-thin mb-10">Transfer Money</h1>
      <form className="flex flex-col items-center gap-6 max-w-lg mx-auto">
        <input
          required
          type="email"
          placeholder="Recipient's Email"
          className="w-full py-3 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:border-[#62D69C]"
          value={recEmail}
          onChange={handleRecEmailChange}
        />
        <input
          required
          type="number"
          placeholder="Amount"
          className="w-full py-3 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:border-[#62D69C]"
          value={amount}
          onChange={handleAmountChange}
        />
        <button
          type="button"
          className="w-full py-3 px-4 bg-[#62D69C] rounded-lg text-white font-semibold transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring focus:border-[#62D69C]"
          onClick={writeToDatabase}
        >
          Transfer
        </button>
      </form>
    </div>
  );
};

export default TransferMoney;
