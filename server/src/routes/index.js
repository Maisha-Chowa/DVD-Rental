import Router from "express";
import { customerRoutes } from "../modules/customer/customer.route.js";
const router = Router();

const moduleRoutes = [
  {
    path: "/customer",
    route: customerRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
