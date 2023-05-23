import express, { Application, Request, Response, NextFunction } from "express";
import router from "../routes/carValueRouter";

const app: Application = express();
app.use(express.json());
app.use("/carValueRouter", router);

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Hello Main Page :)" });
});

export default app;