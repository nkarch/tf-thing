import { rootApi } from "./rootApi";

export const usersApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "users",
        }),
        getUser: builder.query({
            query: (id) => `users/${id}`,
        }),
        getUserExcerpt: builder.query({
            query: (id) => `users/${id}`,
            transformResponse: (user) => {
                return {
                    name: user.name,
                    slug: user.slug,
                    displayPicture: user.displayPicture,
                };
            },
        }),
    }),
});

export const { useGetAllUsersQuery, useGetUserQuery, useGetUserExcerptQuery } = usersApi;
