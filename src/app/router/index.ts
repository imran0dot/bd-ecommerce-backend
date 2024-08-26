import { Router } from "express";
import { categoryRoute } from "../models/categories/categories.route";

const router = Router();
const routes = [
    {
        path: 'category',
        route: categoryRoute
    }
];

routes.forEach(
    route => router.use(`/api/v1/${route.path}`, route.route)
);
router.get('/api/v1/', (req, res) => res.send('working!'));


export const mainRouter = router;