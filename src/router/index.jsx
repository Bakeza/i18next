import { Navigate, Route, Routes } from "react-router";
import About from "../view/AboutView";
import Home from "../view/Home";
import Navbar from "../components/Navbar";
import Contact from "../view/ContactView";

export default function TestingRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
