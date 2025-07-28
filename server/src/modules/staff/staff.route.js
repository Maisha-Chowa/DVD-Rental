import express from "express";
import { staffController } from "./staff.controller.js";

const router = express.Router();

router.get("/", staffController.getAllstaffs);
router.get("/:id", staffController.getstaffById);
router.post("/", staffController.createstaff);
router.put("/:id", staffController.updatestaff);
router.delete("/:id", staffController.deletestaff);

export const staffRoutes = router;
