import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Admin from "../Pages/Admin";
import AdminDashboard from "../Pages/AdminDashboard";
import ContactUs from "../Pages/ContactUs";
import HomePage from "../Pages/HomePage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
