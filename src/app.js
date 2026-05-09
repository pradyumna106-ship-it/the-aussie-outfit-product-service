import express from "express";
import productRouter from "./route/product.js";
import brandRouter from "./route/brand.js";
import categoryRouter from "./route/catrgory.js";
import cors from "cors"
const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true}));
app.options('/api', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form
app.use("/uploads", express.static("uploads"));
app.get('/', (req, res) => {
  res.status(200).json({ message: "API Connected Successfully" })
})
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/brands", brandRouter)

export default app;