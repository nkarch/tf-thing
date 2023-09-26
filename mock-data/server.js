import jsonServer from "json-server";
import routes from "./dbRoutes.js";

const server = jsonServer.create();
const router = jsonServer.router(routes());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, function () {
    console.log("JSON Server is running");
});
