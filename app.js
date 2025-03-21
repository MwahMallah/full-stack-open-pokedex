const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  /*eslint-disable no-console */
  console.log(`server started on port ${PORT} nice!`)
})

app.get('/version', (req, res) => {
  res.send('2') // change this string to ensure a new version deployed
})
