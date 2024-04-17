const Boom = require('@hapi/boom'); // Import Boom correctly
import { db } from "../database";

export const getRestaurantsMenuRoute = {
    method: 'GET',
    path: '/api/restaurants/{restaurant_id}/menu',
    handler: async (req, h) => {
        const restaurant_id = req.params.restaurant_id;
        const { results } = await db.query(
            'SELECT * FROM items WHERE restaurant_id=?', [restaurant_id],
        );

        if (results.length === 0) { // Check if menu is empty
            throw Boom.notFound(`There is no menu available for restaurant with id ${restaurant_id}`);
        }

        return results;
    }
}
