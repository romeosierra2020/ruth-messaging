// const express = require('express');
// const app = express();

// require('dotenv').config()
// const port = process.env.PORT || 3000;
// let message = {};
// // app.use(express.json)
// // app.use(express.urlencoded({ extended: true }))
// app.get('/', (req, res) => {
//     res.json(message)
// });

// app.post('/', (req,res) => {
//     message.message = req.body.msg;
//     message.sender = req.body.sender;
//     res.json(req.body)
//     // res.redirect('https://romeosierra.info/ruth.html');
// })

// app.listen(port, () => {
//     console.log(`Listening Port ${port}`)
// });

const express = require('express')
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config();
const PORT = process.env.PORT;
let message = {};

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json(message)
})
app.post('/', (req, res) => {
    message.message = req.body.msg;
    message.sender = req.body.sender;
    res.redirect('https://romeosierra.info/ruth.html');
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))