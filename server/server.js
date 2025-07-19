
import express from "express";
import sql from "./config/dbConfig.js";
import productRoute from "./routes/product/productRoute.js";

const app = express()

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
app.get('/',async (req, res) => {
  try {
  const result = await sql `SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
  console.log("Database connected successfully !!")
} catch (error) {
  console.log(error)
}
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
