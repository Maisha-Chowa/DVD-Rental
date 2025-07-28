import express from "express";
import { storeController } from "./store.controller.js";

const router = express.Router();

router.get("/", storeController.getAllstores);
router.get("/:id", storeController.getstoreById);
router.post("/", storeController.createstore);
router.put("/:id", storeController.updatestore);
router.delete("/:id", storeController.deletestore);

export const storeRoutes = router;
