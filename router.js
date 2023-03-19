const express = require('express')
const fs = require('fs')
const route = express.Router()

route.get('/', (req, res) => {
    res.statuscode = 200
    const data = fs.readFileSync('index.html', 'utf8')
    res.end(data.toString())
})

module.exports = route