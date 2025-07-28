import express from "express";
import { inventoryController } from "./inventory.controller.js";

const router = express.Router();

router.get("/", inventoryController.getAllinventory);
router.get("/:id", inventoryController.getinventoryById);
router.post("/", inventoryController.createinventory);
router.put("/:id", inventoryController.updateinventory);
router.delete("/:id", inventoryController.deleteinventory);

export const inventoryRoutes = router;
