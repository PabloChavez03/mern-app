import express from "express";
const app = express();
import postRoutes from "./routes/posts.routes.js";
import morgan from "morgan";
import fileUpload from "express-fileupload";


//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}));

//routes
app.use("/", postRoutes);

export default app;