import { configureStore } from "@reduxjs/toolkit";
import { profilesApi } from "../services/profiles";
import { postsApi } from "../services/posts";

export const store = configureStore({
    reducer: {
        [profilesApi.reducerPath]: profilesApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(profilesApi.middleware, postsApi.middleware),
});
