import express from "express";
import sql from "./config/dbConfig.js";
import productRoute from "./routes/product/productRoute.js";
import categoryRoute from "./routes/category/categoryRoute.js";
import orderRoute from "./routes/order/orderRoute.js";
import customeCakeOrderRoute from "./routes/customCakeOrderRoute/customeCakeRoute.js";

const app = express();

// Middleware
app.use(express.json());

// Routes

app.get("/db", async (req, res) => {
  try {
    console.log("start");
    const result = await sql`SELECT version()`;
    res.send(`PostgreSQL Version: ${result[0].version}`);
    console.log("database connected");
  } catch (error) {
    res.status(500).send("Database error: " + error.message);
  }
});
app.get("/", async (req, res) => {
  res.send("This is home page");
});

app.use("/api/v1", productRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", customeCakeOrderRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
