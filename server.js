const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    // call algorith
})


app.listen(PORT, () => { console.log('Server is running on: ' + PORT) })