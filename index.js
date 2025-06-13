const express = require ('express')
const app = express()
const port = 6579
require('./src/models')
const usersRoutes = require('./src/routes/users')
const petsRoutes = require('./src/routes/pets')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(usersRoutes)
app.use(petsRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})