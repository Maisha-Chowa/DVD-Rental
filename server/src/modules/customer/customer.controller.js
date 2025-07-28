import { customerService } from "./customer.service.js";
const getAllCustomers = async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCustomer = async (req, res) => {
  try {
    const newCustomer = await customerService.createCustomer(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await customerService.updateCustomer(
      req.params.id,
      req.body
    );
    res.json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    await customerService.deleteCustomer(req.params.id);
    res.json({ message: "Customer deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const customerController = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
