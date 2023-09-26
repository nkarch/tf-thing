import { Link, useLocation } from "react-router-dom";
import { useGetAllTopLevelPostsByAuthorQuery } from "../redux/services/postsApi";
import Post from "./Post";

const Profile = () => {
    const location = useLocation();
    const {
        data: posts,
        error,
        isLoading,
    } = useGetAllTopLevelPostsByAuthorQuery({ userId: location.state.userId });

    return (
        <>
            <h2>Posts</h2>

            <Link to={`/`}>Home</Link>
            <br />
            <br />

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
export default Profile;
