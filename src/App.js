import { Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import {Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import About from "./pages/About";
import Contact_page from "./pages/Contact_page";
function App() {
  const [isloggedin, setisloggedin] = useState(false); 
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
   
      <Navbar  isloggedin={isloggedin} setisloggedin={setisloggedin}/>
     

      <Routes>
        <Route path="/" element={<Home isloggedin={isloggedin}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact_page/>} />


        <Route path="/login" element={<Login setisloggedin={setisloggedin}/>}/>
        <Route path="/signup" element={<Signup setisloggedin={setisloggedin}/>}/>
        <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isloggedin}>
                <Dashboard/>
        </PrivateRoute>
       }/>
      </Routes>
      
    </div>
  );
}

export default App;
