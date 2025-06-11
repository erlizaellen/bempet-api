const express = require ('express')
const app = express()
const port = 6579
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Ola mundo!")
})



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})