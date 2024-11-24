import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./FirebaseAuthContext/AuthContext";

import Landing from "./Landing/Landing/Landing";
import Home from "./Blog/Home";
import Community from "./Community/Community";
import Login from "./Login_Signup/Login";
import Signup from "./Login_Signup/Signup";

import Sidebar from "./components/Sidebar";
import MainDash from "./Main/MainDash";
import UserProfile from "./Main/Profile/UserProfile";
import Transactions from "./Transaction/Transactions";
import TransferMoney from "./Transaction/TransferMoney";
import PatientData from "./Patient/PatientData";
import HelplineComponent from "./components/HelplineData";
import UserSideBar from "./UserSide/UserSideBar";
import Assessment from "./Assesment/Assessment";

// import Rewards from './Main/Rewards/Rewards';

function App() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    console.log(login);
  }, [login]);

  const [isPatient, setIsPatient] = useState(false);

  return (
    <div className="h-full w-full font-sans">
      <AuthContextProvider>
        {login &&
          (isPatient ? <UserSideBar /> : <Sidebar setLogin={setLogin} />)}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Blog" element={<Home />} />
          <Route path="/Community" element={<Community />} />
          <Route
            path="/Login"
            element={
              <Login
                setLogin={setLogin}
                isPatient={isPatient}
                setIsPatient={setIsPatient}
              />
            }
          />
          <Route path="/SignUp" element={<Signup setLogin={setLogin} />} />
          <Route path="/Dashboard" element={<MainDash />} />
          <Route path="/questionare" element={<UserProfile />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/transfer" element={<TransferMoney />} />
          <Route path="/patients" element={<PatientData />} />
          <Route path="/helpline" element={<HelplineComponent />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
