
import express from 'express'
const app = express()
import sql from "./src/database/index.js"

// Middleware
app.use(express.json())

// Routes
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
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
