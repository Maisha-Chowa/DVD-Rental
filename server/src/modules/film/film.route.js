import express from "express";
import { filmController } from "./film.controller.js";

const router = express.Router();

router.get("/", filmController.getAllfilms);
router.get("/:id", filmController.getfilmById);
router.post("/", filmController.createfilm);
router.put("/:id", filmController.updatefilm);
router.delete("/:id", filmController.deletefilm);

export const filmRoutes = router;
