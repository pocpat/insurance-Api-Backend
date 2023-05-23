import express from "express";
// const app = express();
const router = express.Router();

import app from "./app";

<<<<<<< HEAD
// Route Imports
import carValueRouter from "../routes/carValueRouter";
//  import riskRatingRouter from "../routes/riskRatingRouter";
// Routes
export default app.use(carValueRouter);
//  app.use(riskRatingRouter);
=======
const PORT: Number = 4000;
>>>>>>> elena-ts

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));

<<<<<<< HEAD
app.use(router);
// start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server Connected! Listening at http://localhost:${PORT}`);
});
//
=======








// =============> old code <==================
// // Middlewares
// app.use(express.json());

// // Route Imports
// import carValueRouter from "../routes/carValueRouter";
// //  import riskRatingRouter from "../routes/riskRatingRouter";
// // Routes
// app.use(carValueRouter);
// //  app.use(riskRatingRouter);

// // =================GET=======================
// app.get("/", (req, res) => {
//   res.send("Hello Main Page :)");
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server Connected! Listening at http://localhost:${PORT}`);
// });
// //
>>>>>>> elena-ts
