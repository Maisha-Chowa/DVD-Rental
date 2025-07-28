import express from "express";
import { customerController } from "./customer.controller.js";

const router = express.Router();

router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getCustomerById);
router.post("/", customerController.createCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

export const customerRoutes = router;
