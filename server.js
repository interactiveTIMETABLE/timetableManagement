const http = require('http')
const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const fs = require('fs')
//require("./db/connect")

app.use('/public', express.static('public'))

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.statuscode = 200
    const data = fs.readFileSync('index.html', 'utf8')
    res.end(data.toString())
})

app.post('/', (req, res) => {
    const selectedOption = req.body.selectedOption
    res.render('index', { selectedOption })
})

app.listen(port, () => {
    console.log('Listening on port ' + port)
})