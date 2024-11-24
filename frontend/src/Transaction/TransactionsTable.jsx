import React, { useState, useEffect } from "react";
import { UserAuth } from "../FirebaseAuthContext/AuthContext";
import { database } from "../TransactionFirebase";
import { ref, get } from "firebase/database";

const TransactionsTable = (props) => {
  const { logOut, user } = UserAuth();

  return (
    <div className="overflow-y-scroll">
      <table className="w-full ">
        <thead className=" transition duration-500 bg-[#101010] text-white text-center cursor-pointer">
          <tr className="border-b-[1px] border-black text-center">
            <td className="w-[20%] py-5 font-normal text-md">Transaction ID</td>
            <td className="w-[20%] py-5 font-normal text-md">Sender Detail</td>
            <td className="w-[20%] py-5 font-normal text-md">
              Receiver Detail
            </td>
            <td className="w-[20%] py-5 font-normal text-md">Amount Detail</td>
            <td className="w-[20%] py-5 font-normal text-md">Date</td>
          </tr>
        </thead>

        <tbody>
          {props.data.map((map) => {
            // Check if the current user's email matches recEmail or senderEmail
            const isRecipient = map.recEmail === user?.email;
            const isSender = map.senderEmail === user?.email;

            // Define the background color classes based on the user's role
            const bgColorClass = isRecipient
              ? "bg-[#87E8A1]"
              : isSender
              ? "bg-[#EE94A5]"
              : "";

            return (
              <tr
                className={`border-y-4 border-white transition duration-500 hover:bg-gray-500 hover:text-white text-center cursor-pointer ${bgColorClass} `}
                key={map.id}
              >
                <td className="w-[20%] py-5 font-normal text-md">{map.uuid}</td>
                <td className="w-[20%] py-5 font-normal text-md">
                  {map.senderEmail}
                </td>
                <td className="w-[20%] py-5 font-normal text-md">
                  {map.recEmail}
                </td>
                <td className="w-[20%] py-5 font-normal text-md">
                  {map.amount}
                </td>
                <td className="w-[20%] py-5 font-normal text-md">
                  {map.date_Time}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
