const {Pets} = require('../models')

async function getPets(req, res) {
    try {
        //findAll é função nativa do sequelize
        const pets = await Pets.findAll()

        return res.send(pets)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar pet(s)')
    }
}

async function createPet(req,res){
    try {
        const produto = await Pets.create(req.body)
        return res.status(201).send(produto)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao criar pet')
    }
}

async function deletePet(req, res){
    const {id} = req.params;
    try {
        //destroy é função nativa do sequelize
        await Pets.destroy({
            where: {
                id: id
            }
        })

        return res.status(202).send('Arquivo de pet deletado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao deletar pet')
    }
    
}

module.exports = {
    getPets,
    createPet,
    deletePet
}