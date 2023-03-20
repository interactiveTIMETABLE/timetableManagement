const express = require('express')
const fs = require('fs')
const route = express.Router()
const controller = require('./controller')

route.get('/', (req, res) => {
    res.statuscode = 200
    const data = fs.readFileSync('index.html', 'utf8')
    res.end(data.toString())
})

route.post('/api/dept_db', controller.create)

module.exports = route