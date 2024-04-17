const Boom = require('@hapi/boom');
import { db } from "../database";

export const createNewMenuRoute = {
    method: 'POST',
    path: '/api/restaurants/{restaurant_id}/menu/create',
    handler: async (req, h) => {
        const restaurantId = req.params.restaurant_id;
        const {name = '', price = 0 } = req.payload; 

        try {
            await db.query(`
                INSERT INTO items (restaurant_id, name, price)
                VALUES (?, ?, ?);
                
            `,
            [restaurantId, name, price]
            );

            return { restaurant_id: restaurantId, name, price };
        } catch (error) {
            throw Boom.internal('An internal server error occurred');
        }
    }
}
