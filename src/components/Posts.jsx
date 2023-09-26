import { useGetAllTopLevelPostsQuery } from "../redux/services/postsApi";

import Post from "../components/Post";

const Posts = () => {
    const { data: posts, error, isLoading } = useGetAllTopLevelPostsQuery();

    return (
        <>
            <h2>Posts</h2>

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : posts ? (
                posts.map((post) => {
                    return <Post key={post.id} post={post} />;
                })
            ) : null}
        </>
    );
};
export default Posts;
