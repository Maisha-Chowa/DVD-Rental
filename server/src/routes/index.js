import Router from "express";
import { customerRoutes } from "../modules/customer/customer.route.js";
import { filmRoutes } from "../modules/film/film.route.js";
import { inventoryRoutes } from "../modules/inventory/inventory.route.js";
import { rentalRoutes } from "../modules/rental/rental.route.js";
import { staffRoutes } from "../modules/staff/staff.route.js";
import { storeRoutes } from "../modules/store/store.route.js";
const router = Router();

const moduleRoutes = [
  {
    path: "/customer",
    route: customerRoutes,
  },
  {
    path: "/film",
    route: filmRoutes,
  },
  {
    path: "/inventory",
    route: inventoryRoutes,
  },
  {
    path: "/rental",
    route: rentalRoutes,
  },
  {
    path: "/staff",
    route: staffRoutes,
  },
  {
    path: "/store",
    route: storeRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
