import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  tagTypes: ["Customer", "Film", "Inventory", "Rental", "Staff", "Store"],
  endpoints: (builder) => ({
    // Customer endpoints
    getCustomers: builder.query({
      query: () => "/customer",
      providesTags: ["Customer"],
    }),
    getCustomerById: builder.query({
      query: (id) => `/customer/${id}`,
      providesTags: (result, error, id) => [{ type: "Customer", id }],
    }),
    createCustomer: builder.mutation({
      query: (customer) => ({
        url: "/customer",
        method: "POST",
        body: customer,
      }),
      invalidatesTags: ["Customer"],
    }),
    updateCustomer: builder.mutation({
      query: ({ id, ...customer }) => ({
        url: `/customer/${id}`,
        method: "PUT",
        body: customer,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Customer", id },
        "Customer",
      ],
    }),
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/customer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Customer"],
    }),

    // Film endpoints
    getFilms: builder.query({
      query: () => "/film",
      providesTags: ["Film"],
    }),
    getFilmById: builder.query({
      query: (id) => `/film/${id}`,
      providesTags: (result, error, id) => [{ type: "Film", id }],
    }),
    createFilm: builder.mutation({
      query: (film) => ({
        url: "/film",
        method: "POST",
        body: film,
      }),
      invalidatesTags: ["Film"],
    }),
    updateFilm: builder.mutation({
      query: ({ id, ...film }) => ({
        url: `/film/${id}`,
        method: "PUT",
        body: film,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Film", id },
        "Film",
      ],
    }),
    deleteFilm: builder.mutation({
      query: (id) => ({
        url: `/film/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Film"],
    }),

    // Inventory endpoints
    getInventory: builder.query({
      query: () => "/inventory",
      providesTags: ["Inventory"],
    }),
    getInventoryById: builder.query({
      query: (id) => `/inventory/${id}`,
      providesTags: (result, error, id) => [{ type: "Inventory", id }],
    }),
    createInventory: builder.mutation({
      query: (inventory) => ({
        url: "/inventory",
        method: "POST",
        body: inventory,
      }),
      invalidatesTags: ["Inventory"],
    }),
    updateInventory: builder.mutation({
      query: ({ id, ...inventory }) => ({
        url: `/inventory/${id}`,
        method: "PUT",
        body: inventory,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Inventory", id },
        "Inventory",
      ],
    }),
    deleteInventory: builder.mutation({
      query: (id) => ({
        url: `/inventory/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Inventory"],
    }),

    // Rental endpoints
    getRentals: builder.query({
      query: () => "/rental",
      providesTags: ["Rental"],
    }),
    getRentalById: builder.query({
      query: (id) => `/rental/${id}`,
      providesTags: (result, error, id) => [{ type: "Rental", id }],
    }),
    createRental: builder.mutation({
      query: (rental) => ({
        url: "/rental",
        method: "POST",
        body: rental,
      }),
      invalidatesTags: ["Rental"],
    }),
    updateRental: builder.mutation({
      query: ({ id, ...rental }) => ({
        url: `/rental/${id}`,
        method: "PUT",
        body: rental,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Rental", id },
        "Rental",
      ],
    }),
    deleteRental: builder.mutation({
      query: (id) => ({
        url: `/rental/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Rental"],
    }),

    // Staff endpoints
    getStaff: builder.query({
      query: () => "/staff",
      providesTags: ["Staff"],
    }),
    getStaffById: builder.query({
      query: (id) => `/staff/${id}`,
      providesTags: (result, error, id) => [{ type: "Staff", id }],
    }),
    createStaff: builder.mutation({
      query: (staff) => ({
        url: "/staff",
        method: "POST",
        body: staff,
      }),
      invalidatesTags: ["Staff"],
    }),
    updateStaff: builder.mutation({
      query: ({ id, ...staff }) => ({
        url: `/staff/${id}`,
        method: "PUT",
        body: staff,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Staff", id },
        "Staff",
      ],
    }),
    deleteStaff: builder.mutation({
      query: (id) => ({
        url: `/staff/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Staff"],
    }),

    // Store endpoints
    getStores: builder.query({
      query: () => "/store",
      providesTags: ["Store"],
    }),
    getStoreById: builder.query({
      query: (id) => `/store/${id}`,
      providesTags: (result, error, id) => [{ type: "Store", id }],
    }),
    createStore: builder.mutation({
      query: (store) => ({
        url: "/store",
        method: "POST",
        body: store,
      }),
      invalidatesTags: ["Store"],
    }),
    updateStore: builder.mutation({
      query: ({ id, ...store }) => ({
        url: `/store/${id}`,
        method: "PUT",
        body: store,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Store", id },
        "Store",
      ],
    }),
    deleteStore: builder.mutation({
      query: (id) => ({
        url: `/store/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Store"],
    }),
  }),
});

// Export hooks for usage in components
export const {
  // Customer hooks
  useGetCustomersQuery,
  useGetCustomerByIdQuery,
  useCreateCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,

  // Film hooks
  useGetFilmsQuery,
  useGetFilmByIdQuery,
  useCreateFilmMutation,
  useUpdateFilmMutation,
  useDeleteFilmMutation,

  // Inventory hooks
  useGetInventoryQuery,
  useGetInventoryByIdQuery,
  useCreateInventoryMutation,
  useUpdateInventoryMutation,
  useDeleteInventoryMutation,

  // Rental hooks
  useGetRentalsQuery,
  useGetRentalByIdQuery,
  useCreateRentalMutation,
  useUpdateRentalMutation,
  useDeleteRentalMutation,

  // Staff hooks
  useGetStaffQuery,
  useGetStaffByIdQuery,
  useCreateStaffMutation,
  useUpdateStaffMutation,
  useDeleteStaffMutation,

  // Store hooks
  useGetStoresQuery,
  useGetStoreByIdQuery,
  useCreateStoreMutation,
  useUpdateStoreMutation,
  useDeleteStoreMutation,
} = api;
