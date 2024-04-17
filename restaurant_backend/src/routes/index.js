import { createNewMenuRoute } from "./createNewMenu";
import { getAllRestaurantsRoute } from "./getAllRestaurants";
import { getRestaurantsMenuRoute } from "./getMenu";
import { getRestaurantsProfileRoute } from "./getRestautrantProfile";

export default [
    getAllRestaurantsRoute,
    getRestaurantsProfileRoute,
    getRestaurantsMenuRoute, 
    createNewMenuRoute
];