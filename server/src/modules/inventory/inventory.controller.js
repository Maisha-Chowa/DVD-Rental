import { inventoryService } from "./inventory.service.js";
const getAllinventory = async (req, res) => {
  try {
    const inventory = await inventoryService.getAllinventory();
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getinventoryById = async (req, res) => {
  try {
    const inventory = await inventoryService.getinventoryById(req.params.id);
    if (!inventory)
      return res.status(404).json({ message: "inventory not found" });
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createinventory = async (req, res) => {
  try {
    const newinventory = await inventoryService.createinventory(req.body);
    res.status(201).json(newinventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateinventory = async (req, res) => {
  try {
    const updatedinventory = await inventoryService.updateinventory(
      req.params.id,
      req.body
    );
    res.json(updatedinventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteinventory = async (req, res) => {
  try {
    await inventoryService.deleteinventory(req.params.id);
    res.json({ message: "inventory deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const inventoryController = {
  getAllinventory,
  getinventoryById,
  createinventory,
  updateinventory,
  deleteinventory,
};
