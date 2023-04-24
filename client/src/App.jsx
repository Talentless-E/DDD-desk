import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="profile" element={<ProfilePage/>}/>
         </Routes>
      </>
   );
}

export default App;
