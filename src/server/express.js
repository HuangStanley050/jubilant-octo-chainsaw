import express from "express";
import path from "path";

const app = express();
const staticMiddleWare = express.static("dist");
app.use(staticMiddleWare);
app.listen(8000, () => console.log("server running"));
