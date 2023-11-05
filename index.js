const dotenv = require("dotenv")
const express = require("express");
const app = express();
const cors = require('cors')

dotenv.config({ path: "./.env" })

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    return res.json({ message: "hello world" })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

