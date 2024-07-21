// src/main.tsx or src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/aboutus";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Navigate from "./routes/nav";
import Footer from "./routes/footer";
import Forgetpassword from "./routes/forgetpass";
import Profile from "./routes/profile";
import ContactUs from "./routes/contactus";
import PrivacyPolicy from "./routes/privacy";

const App: React.FC = () => {
  return (
    <Router>
      <Navigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
