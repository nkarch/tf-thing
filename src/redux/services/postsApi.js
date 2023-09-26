import { rootApi } from "./rootApi";

export const postsApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTopLevelPosts: builder.query({
            query: () => "posts",
            transformResponse: (posts) => {
                return posts.filter((post) => !post.parentId && post.parentId !== 0);
            },
        }),
        getPostChildren: builder.query({
            query: () => `posts`,
            transformResponse: (posts, meta, args) => {
                return posts.filter((post) => post.parentId === args.parentId && args.level < 2);
            },
        }),
        getAllTopLevelPostsByAuthor: builder.query({
            query: () => `posts`,
            transformResponse: (posts, meta, args) => {
                return posts.filter((post) => post.authorId === args.userId);
            },
        }),
        // getPostChildrenIds: builder.query({
        //     query: (id) => `postRelations`,
        //     transformResponse: (post, meta, parentId) => {
        //         // console.log(post.childOf, parentId);
        //         return post.filter((post) => post.childOf === parentId);
        //     },
        // }),
        getAllPosts: builder.query({
            query: () => "posts",
        }),
        getPostById: builder.query({
            query: (id) => `posts:${id}`,
        }),
        getPostsById: builder.query({
            query: (id) => `posts`,
            transformResponse: (res, meta, arg) => {
                return res.filter((res) => arg.includes(res.id));
            },
        }),
        getPostRelation: builder.query({
            query: (id) => `postRelations`,
            transformResponse: (res, meta, arg) => {
                return res.filter((res) => res.postId === arg);
            },
        }),
    }),
});

export const {
    useGetAllPostsQuery,
    useGetPostByIdQuery,
    useGetPostsByIdQuery,
    useGetPostRelationQuery,
    useGetPostChildrenQuery,
    // useGetPostChildrenIdsQuery,
    useGetAllTopLevelPostsByAuthorQuery,
    useGetAllTopLevelPostsQuery,
} = postsApi;
