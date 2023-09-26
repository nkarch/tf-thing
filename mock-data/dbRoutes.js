import images from "./images.json" assert { type: "json" };
import posts from "./posts.json" assert { type: "json" };
import users from "./users.json" assert { type: "json" };

export default () => {
    return {
        images,
        posts,
        users,
    };
};
