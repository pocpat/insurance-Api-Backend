<<<<<<< HEAD
// import express from "express";
// const app = express();
// const router = express.Router();

// app.use(express.json());

// import carValueRouter from "../routes/carValueRouter";
// import exp from "constants";
// //  import riskRatingRouter from "../routes/riskRatingRouter";
// // Routes
// app.use(carValueRouter);
// //  app.use(riskRatingRouter);

// // =================GET=======================
// app.get("/", (req, res) => {
//   res.send("Hello Main Page :)");
// });

// app.use(router);

// export default app;

import express, { Application, Request, Response, NextFunction } from "express";

import { router as userRoutes } from "./routes/user.routes";
import carValueRouter from "../routes/carValueRouter";

const app: Application = express();

app.use("/users", userRoutes);

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Allo! Catch-all route." });
=======
import express, { Application, Request, Response, NextFunction } from "express";
import router from "../routes/carValueRouter";

const app: Application = express();
app.use(express.json());
app.use("/carValueRouter", router);

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Hello Main Page :)" });
>>>>>>> elena-ts
});

export default app;