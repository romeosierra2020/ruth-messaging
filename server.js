const express = require('express');
const app = express();

require('dotenv').config()
const port = process.env.PORT || 3000;
let message = {};

app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.json(message)
});

app.post('/', (req,res) => {
    message.message = req.body.msg;
    message.sender=req.body.sender;
    res.send('<div class="container"><h1>Message Sent</h1></div>')
})

app.listen(port, () => {
    console.log(`Listening Port ${port}`)
})