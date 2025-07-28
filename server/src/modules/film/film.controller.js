import { filmService } from "./film.service.js";
const getAllfilms = async (req, res) => {
  try {
    const films = await filmService.getAllfilms();
    res.json(films);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getfilmById = async (req, res) => {
  try {
    const film = await filmService.getfilmById(req.params.id);
    if (!film) return res.status(404).json({ message: "film not found" });
    res.json(film);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createfilm = async (req, res) => {
  try {
    const newfilm = await filmService.createfilm(req.body);
    res.status(201).json(newfilm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatefilm = async (req, res) => {
  try {
    const updatedfilm = await filmService.updatefilm(req.params.id, req.body);
    res.json(updatedfilm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletefilm = async (req, res) => {
  try {
    await filmService.deletefilm(req.params.id);
    res.json({ message: "film deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const filmController = {
  getAllfilms,
  getfilmById,
  createfilm,
  updatefilm,
  deletefilm,
};
