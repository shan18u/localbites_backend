export const fakeRestaurantData = [{
    restaurant_id: 1,
    name: 'Restaurant John A',
    location: '123 Main St'
}, {
    restaurant_id: 2,
    name: 'Restaurant B',
    location: '456 Elm St'
}, {
    restaurant_id: 3,
    name: 'Restaurant C',
    location: '789 Oak St'
}];

export const fakeItemsData = [{
    item_id: 1,
    restaurant_id: 1,
    name: 'Item 1',
    price: 10
}, {
    item_id: 2,
    restaurant_id: 1,
    name: 'Item 2',
    price: 8
}, {
    item_id: 3,
    restaurant_id: 2,
    name: 'Item 3',
    price: 12
}];

export const fakeUserData = [{
    user_id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    zip_code: '12345'
}, {
    user_id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    zip_code: '54321'
}, {
    user_id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    zip_code: '98765'
}];

export const fakeOffersData = [{
    offer_id: 1,
    restaurant_id: 1,
    discount: 15,
    zip_code: '12345'
}, {
    offer_id: 2,
    restaurant_id: 2,
    discount: 10,
    zip_code: '54321'
}, {
    offer_id: 3,
    restaurant_id: 3,
    discount: 20,
    zip_code: '98765'
}];

export const fakeJoinedOffersData = [{
    joined_offer_id: 1,
    user_id: 1,
    offer_id: 1
}, {
    joined_offer_id: 2,
    user_id: 2,
    offer_id: 2
}, {
    joined_offer_id: 3,
    user_id: 3,
    offer_id: 3
}];
