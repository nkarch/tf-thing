import { Link, useNavigate } from "react-router-dom";
import { useGetUserExcerptQuery } from "../redux/services/usersApi";

const PostAttribution = ({ userId, timestamp }) => {
    const { data: user, error, isLoading } = useGetUserExcerptQuery(userId);

    const navigate = useNavigate();
    const onNavigate = (e) => {
        e.preventDefault();
        navigate(`/user/${user.slug}`, { state: { userId } });
    };

    const TIMESTAMP_FORMAT = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    const timestampDisplay = new Date(timestamp).toLocaleDateString("en-us", TIMESTAMP_FORMAT);

    return isLoading ? (
        "Loading"
    ) : error ? (
        "Error"
    ) : user ? (
        <div className='post-attribution'>
            <img
                width='60'
                height='60'
                style={{ objectFit: "cover" }}
                src={`/images/${user.displayPicture}`}
                alt=''
            />
            {/* <Link to={`/user/${user.slug}`} wow={"good"}>{user.name}</Link> */}
            <a href={`/user/${user.slug}`} onClick={(e) => onNavigate(e)}>
                {user.name}
            </a>
            <br />
            <small>{timestampDisplay}</small>
        </div>
    ) : null;
};

export default PostAttribution;
