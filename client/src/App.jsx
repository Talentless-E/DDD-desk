import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import ModelViewerPage from "./pages/ModelViewerPage";
import { useSelector } from "react-redux";

function App() {
   const isLogin = useSelector((state) => state.auth.isLogin)
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/profile" element={isLogin ? <ProfilePage/> : <Navigate to="/" />}/>
            <Route path="/model/:currentModel" element={<ModelViewerPage/>}/>
         </Routes>
      </>
   );
}

export default App;
