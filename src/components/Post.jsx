import { useGetPostChildrenQuery } from "../redux/services/postsApi";

import PostAttribution from "./PostAttribution";

const Post = ({ post, level = 0 }) => {
    const {
        data: children,
        error,
        isLoading,
    } = useGetPostChildrenQuery({ parentId: post.id, level });

    return (
        <div
            className='post'
            style={
                level
                    ? {
                          borderLeft: "1px solid white",
                          margin: "10px 0 10px 10px",
                          paddingLeft: "20px",
                      }
                    : { marginBottom: "20px" }
            }
        >
            <PostAttribution userId={post.authorId} timestamp={post.timestamp} />
            <div className='post-content'>{post.content}</div>
            <div className='reactions'>-reactions-</div>
            <footer className='post-footer'>
                Like | {level ? "Reply" : "Comment"} | Share | {level}
                {children?.map((child) => {
                    return <Post post={child} key={child.id} level={level + 1} />;
                })}
            </footer>
        </div>
    );
};
export default Post;
