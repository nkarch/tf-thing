import { useGetAllPostsQuery } from "./services/posts";

import Post from "./components/Post";

function App() {
    const { data: posts, error, isLoading } = useGetAllPostsQuery();

    return (
        <>
            <h1>Transformers Thing</h1>

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
}

export default App;
