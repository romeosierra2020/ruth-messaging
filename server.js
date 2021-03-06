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
    message.sender = req.body.sender;
    res.redirect('https://romeosierra.info/ruth.html');
})

app.listen(port, () => {
    console.log(`Listening Port ${port}`)
})