import { useGetProfileExcerptQuery } from "../services/profiles";

const Post = ({ post }) => {
    const {
        data: profile,
        error: profileError,
        isLoading: profileIsLoading,
    } = useGetProfileExcerptQuery(post.authorId);

    const PostAttribution = () => {
        const timestampFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        };

        const timestampDisplay = new Date(post.timestamp).toLocaleDateString(
            "en-us",
            timestampFormatOptions
        );

        return (
            <div className='post-attribution'>
                <img
                    width='60'
                    height='60'
                    style={{ objectFit: "cover" }}
                    src={`../public/images/${profile.displayPicture}`}
                    alt=''
                />
                <a href={`/profile/${profile.slug}`}>{profile.name}</a>
                <span>{timestampDisplay}</span>
            </div>
        );
    };
    const PostTemplate = ({ post, child = false }) => {
        return profileIsLoading ? (
            "Loading"
        ) : profileError ? (
            "Error"
        ) : profile ? (
            <div
                className='post'
                style={
                    child
                        ? {
                              borderLeft: "1px solid white",
                              margin: "10px 0 10px 10px",
                              paddingLeft: "20px",
                          }
                        : { marginBottom: "20px" }
                }
            >
                <PostAttribution id={post.authorId} />
                <div className='post-content'>{post.content}</div>
                <div className='reactions'>-reactions-</div>
                <footer className='post-footer'>
                    Like | {child ? "Reply" : "Comment"} | Share
                </footer>
                {post.children?.map((child) => {
                    return <PostTemplate post={child} key={child.id} child={true} />;
                })}
            </div>
        ) : null;
    };

    return <PostTemplate post={post} />;
};
export default Post;
