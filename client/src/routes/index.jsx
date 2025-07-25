import AdminLayout from "components/AdminLayout";
import Customers from "pages/Customers/Customers";
import Dashboard from "pages/Dashboard/Dashboard";
import Films from "pages/Films/Films";
import Payments from "pages/Payments/Payments";
import Rentals from "pages/Rentals/Rentals";
import Reports from "pages/Reports/Reports";
import React from "react";
import { Routes, Route } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/films" element={<Films />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
