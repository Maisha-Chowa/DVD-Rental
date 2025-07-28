import express from "express";
import { rentalController } from "./rental.controller.js";

const router = express.Router();

router.get("/", rentalController.getAllrentals);
router.get("/:id", rentalController.getrentalById);
router.post("/", rentalController.createrental);
router.put("/:id", rentalController.updaterental);
router.delete("/:id", rentalController.deleterental);

export const rentalRoutes = router;
