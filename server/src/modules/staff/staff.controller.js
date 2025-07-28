import { staffService } from "./staff.service.js";
const getAllstaffs = async (req, res) => {
  try {
    const staffs = await staffService.getAllstaffs();
    res.json(staffs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getstaffById = async (req, res) => {
  try {
    const staff = await staffService.getstaffById(req.params.id);
    if (!staff) return res.status(404).json({ message: "staff not found" });
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createstaff = async (req, res) => {
  try {
    const newstaff = await staffService.createstaff(req.body);
    res.status(201).json(newstaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatestaff = async (req, res) => {
  try {
    const updatedstaff = await staffService.updatestaff(
      req.params.id,
      req.body
    );
    res.json(updatedstaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletestaff = async (req, res) => {
  try {
    await staffService.deletestaff(req.params.id);
    res.json({ message: "staff deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const staffController = {
  getAllstaffs,
  getstaffById,
  createstaff,
  updatestaff,
  deletestaff,
};
