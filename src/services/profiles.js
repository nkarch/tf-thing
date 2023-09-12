import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profilesApi = createApi({
    reducerPath: "profilesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => ({
        getAllProfiles: builder.query({
            query: () => "profiles",
        }),
    }),
});

export const { useGetAllProfilesQuery } = profilesApi;
