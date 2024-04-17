const Boom = require('@hapi/boom');
import { db } from "../database";

export const getRestaurantsProfileRoute = {
    method: 'GET',
    path: '/api/restaurants/{restaurant_id}', 
    handler: async (req, h) => {
        const restaurant_id = req.params.restaurant_id; 
        const { results } = await db.query(
            'SELECT * FROM items WHERE restaurant_id=?', [restaurant_id],
        );

        const restaurant = results[0];
        if (!restaurant) throw Boom.notFound(`There is no Restaurants with id ${restaurant_id}`);

        return restaurant;
    }
}
