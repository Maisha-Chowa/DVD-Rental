import { configureStore } from "@reduxjs/toolkit";

// Import reducers here when created
// import dvdReducer from './features/dvdSlice';
// import customerReducer from './features/customerSlice';
// import rentalReducer from './features/rentalSlice';

export const store = configureStore({
  reducer: {
    // Add reducers here
    // dvds: dvdReducer,
    // customers: customerReducer,
    // rentals: rentalReducer,
  },
});

export default store;
