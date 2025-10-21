import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatPage from "./pages/Chat";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import getCurrentUser from "./hooks/getCurrentUser";
import About from "./components/About";
import Profile from "./pages/Profile";
import useOtherUsers from "./hooks/getOtherUsers";

const App = () => {
  getCurrentUser();
  useOtherUsers();
  const { userData } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userData ? <ChatPage /> : <Home />} />
        <Route
          path="/login"
          element={userData ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={userData ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/profile"
          element={userData ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
