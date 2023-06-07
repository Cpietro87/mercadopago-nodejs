import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";
import paymentRoutes from "./routes/payment.rautes.js";

const app = express();

app.use(morgan('dev'));

app.use(paymentRoutes);

app.listen(PORT);
console.log('Server on port', PORT);