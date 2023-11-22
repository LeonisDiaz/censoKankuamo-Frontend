import React from "react";
import ReactDOM from "react-dom/client";
//import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Game from "./pages/Game";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Mpage from "./pages/Mpage";
import Registro from "./pages/Registro";
import Consult from "./pages/Consult"

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
// para iniciar -npm start
export default function App() {
  
  return (
    <>
      <div className="bannerI">
        <img src="img/ejemplo1.jpg" alt="banner-Kankuamos"/>
      </div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mpage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/consult" element={<Consult/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
  <>
    <App />
  </>
  </React.StrictMode>
);
