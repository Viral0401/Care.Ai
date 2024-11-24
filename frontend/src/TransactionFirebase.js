// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import {
//   getDatabase,
//   ref,
//   set,
//   get,
//   update,
//   remove,
//   child,
//   onValue,
// } from "firebase/database";
// import { uid } from "uid";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// var userID = uid();

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDEeCX_bH-WRL1IsWbSVJBzZUQB8oFYI64",
//   authDomain: "banking-app-sparks-182f9.firebaseapp.com",
//   projectId: "banking-app-sparks-182f9",
//   storageBucket: "banking-app-sparks-182f9.appspot.com",
//   messagingSenderId: "923434037585",
//   appId: "1:923434037585:web:740d609a3692bba9476370",
//   databaseURL: "https://banking-app-sparks-182f9-default-rtdb.firebaseio.com/",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// // Initialize Realtime Database and get a reference to the service
// export const database = getDatabase(app);
// //this function is to write data to the database or to update it
// // export function writeUserData(amount, dateTime , receiverEmail , senderEmail){

// //     const reference = ref(database , '/${userID}');

// //     set( reference ,
// //       {
// //         uid,
// //         amount: amount,
// //         dateTime: dateTime,
// //         receiverEmail: receiverEmail,
// //         senderEmail: senderEmail
// //       });

// // }

// // writeUserData(10000 , "2023-5-2 22:36:27" , "poddarbhavya3@gmail.com" , "chandhokhargun@gmail.com");

// //Function to read data
// // export function readData(){

// //   const readAmount = ref(database, 'Transaction/' + userID + '/amount');
// //   onValue(readAmount , (snapshot) => {
// //     const data  = snapshot.val();
// //     update(postMessage , data);
// //   })

// // }
