import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profilesApi = createApi({
    reducerPath: "profilesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => ({
        getAllProfiles: builder.query({
            query: () => "profiles",
        }),
        getProfile: builder.query({
            query: (id) => `profiles/${id}`,
        }),
        getProfileExcerpt: builder.query({
            query: (id) => `profiles/${id}`,
            transformResponse: (profile) => {
                return {
                    name: profile.name,
                    slug: profile.slug,
                    displayPicture: profile.displayPicture,
                };
            },
        }),
    }),
});

export const { useGetAllProfilesQuery, useGetProfileQuery, useGetProfileExcerptQuery } =
    profilesApi;
