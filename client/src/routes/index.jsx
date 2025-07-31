import AdminLayout from "components/AdminLayout";
import Customers from "pages/Customers/Customers";
import Dashboard from "pages/Dashboard/Dashboard";
import Films from "pages/Films/Films";
import Inventory from "pages/Inventory/Inventory";
import Payments from "pages/Payments/Payments";
import Rentals from "pages/Rentals/Rentals";
import Reports from "pages/Reports/Reports";
import Staff from "pages/Staff/Staff";
import Store from "pages/Store/Store";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/films" element={<Films />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/store" element={<Store />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
