import express from "express";
import cors from "cors";
import apiRouter from "./src/api/api-routes";
import authRouter from "./src/auth/auth-routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);
app.use('/auth', authRouter);

export default app