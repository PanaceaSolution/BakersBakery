const express = require('express');
const app = express();
const cors = require("cors")

app.use(cors({
    origin : "*"
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));



const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log(`Server started at ${PORT}...`);
})