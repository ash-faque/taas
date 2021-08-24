const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello monoos..')
})
app.listen(2020, () => console.log('listening...'))