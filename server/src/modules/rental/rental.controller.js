import { rentalService } from "./rental.service.js";
const getAllrentals = async (req, res) => {
  try {
    const rentals = await rentalService.getAllrentals();
    res.json(rentals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getrentalById = async (req, res) => {
  try {
    const rental = await rentalService.getrentalById(req.params.id);
    if (!rental) return res.status(404).json({ message: "rental not found" });
    res.json(rental);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createrental = async (req, res) => {
  try {
    const newrental = await rentalService.createrental(req.body);
    res.status(201).json(newrental);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updaterental = async (req, res) => {
  try {
    const updatedrental = await rentalService.updaterental(
      req.params.id,
      req.body
    );
    res.json(updatedrental);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleterental = async (req, res) => {
  try {
    await rentalService.deleterental(req.params.id);
    res.json({ message: "rental deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const rentalController = {
  getAllrentals,
  getrentalById,
  createrental,
  updaterental,
  deleterental,
};
