import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config(); 
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/erroMiddleware.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
  res.send("SERVER IS READY");
});

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));
