const { Users } = require('../models')

async function createUser(req, res){
    try {
        await Users.create(req.body)
        return res.status(201).send('Usuário criado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    createUser
}