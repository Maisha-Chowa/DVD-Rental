import { storeService } from "./store.service.js";
const getAllstores = async (req, res) => {
  try {
    const stores = await storeService.getAllstores();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getstoreById = async (req, res) => {
  try {
    const store = await storeService.getstoreById(req.params.id);
    if (!store) return res.status(404).json({ message: "store not found" });
    res.json(store);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createstore = async (req, res) => {
  try {
    const newstore = await storeService.createstore(req.body);
    res.status(201).json(newstore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatestore = async (req, res) => {
  try {
    const updatedstore = await storeService.updatestore(
      req.params.id,
      req.body
    );
    res.json(updatedstore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletestore = async (req, res) => {
  try {
    await storeService.deletestore(req.params.id);
    res.json({ message: "store deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const storeController = {
  getAllstores,
  getstoreById,
  createstore,
  updatestore,
  deletestore,
};
