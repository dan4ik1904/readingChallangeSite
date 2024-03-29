const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000


const craetePage = (page) => path.resolve(`${page}.html`)

app.listen(PORT, () => {
    console.log('site sterted on PORT', PORT)
})

app.get('/tg/form', (req, res) => {
    res.sendFile(craetePage('index'))
})

app.get('/', (req, res) => {
    res.send('OK')
})
