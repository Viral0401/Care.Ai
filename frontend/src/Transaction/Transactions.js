import React, { useState, useEffect } from "react";
import TransactionsTable from "./TransactionsTable";
import { UserAuth } from "../FirebaseAuthContext/AuthContext";

const Transactions = () => {
  const [tableData, setTableData] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const fetchData = async (user) => {
      try {
        if (!user) {
          console.error("User object or email is missing.");
          return;
        }

        const response = await fetch(`/gettransfer/${user.email}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        console.log(user);
        const data = await response.json();
        setTableData(data); // Assuming the response is an object
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(user);
  }, [user]);
  return (
    <div className="w-full p-10 overflow-y-auto">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-5xl font-thin">Your Transactions</h1>
        <form className="w-1/3 relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-[#72e485]"
            placeholder="Search Transactions..."
            required
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 bg-[#72e485] text-white font-medium rounded-r-lg px-6 py-3 focus:ring-4 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
      <TransactionsTable data={tableData} />
    </div>
  );
};

export default Transactions;
