import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "posts",
        }),
    }),
});

export const { useGetAllPostsQuery } = postsApi;
