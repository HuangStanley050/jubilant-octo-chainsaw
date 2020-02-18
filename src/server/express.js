import express from "express";
import path from "path";
//import webpack from "webpack";
//import config from "../../config/webpack.dev.js";
//import webpackDevMiddleware from "webpack-dev-middleware";

//const compiler = webpack(config);
//webpackDevMiddleware(compiler, config.devServer);
const app = express();
const staticMiddleWare = express.static("dist");
//app.use(webpackDevMiddleware);
app.use(staticMiddleWare);
app.listen(8000, () => console.log("server running"));
