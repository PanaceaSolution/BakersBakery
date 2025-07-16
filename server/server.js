import express from 'express'

const app = express()

// Middleware
app.use(express.json())

// Routes
app.get('/a', (req, res) => {
  res.send('Welcome to Bakers Bakery API!')
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
