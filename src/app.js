import express from "express";
import productRouter from "./route/product.js";
import brandRouter from "./route/brand.js";
import categoryRouter from "./route/catrgory.js";
import cors from "cors"
const app = express();

app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true}));
app.use(express.urlencoded({ extended: true })); // for form
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use("/categories", categoryRouter);
app.use("/brands", brandRouter)
app.use("/", productRouter);
export default app;