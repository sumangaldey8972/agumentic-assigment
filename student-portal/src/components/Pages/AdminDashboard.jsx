import React from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboardNavbar from "../commonFiles/AdminDashboardNavbar";
import HomeSection from "./HomeSection";

const AdminDashboard = () => {
  const username = localStorage.getItem("username") || "";
  const navigate = useNavigate();
  if (username == "") {
    navigate("/admin");
  }
  return (
    <>
      <AdminDashboardNavbar />
      <HomeSection />
    </>
  );
};

export default AdminDashboard;
