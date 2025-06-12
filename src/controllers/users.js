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

async function getUsers(req, res) {
    try {
        const users = await Users.findAll()
        return res.send(users)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar usuário')
    }
}
async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        await Users.destroy({
            where: {
                id: id
            }
        })

        return res.status(202).send('Usuário deletado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao deletar usuário')
    }
}
async function updateUser(req, res) {
    const { id } = req.params;
    try {
        await Users.update(req.body, {
            where: {
                id: id
            }
        })

        return res.status(200).send('Usuário atualizado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao atualizar usuário')
    }
}
module.exports = {
    createUser,
    getUsers,
    deleteUser,
    updateUser
}