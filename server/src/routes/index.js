import Router from "expressß";
const router = Router();

const moduleRoutes = [
    {
        path:"",
        route:
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
