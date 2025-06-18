const { Pets } = require('../models')

async function getPets(req, res) {
    try {
        //findAll é função nativa do sequelize
        const pets = await Pets.findAll()

        return res.send(pets)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar pets')
    }
}

async function getPetById(req, res) {
    const { id } = req.params;
    try {
        const pets = await Pets.findByPk(id)

        return res.send(pets);
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar pet')
    }
}

async function getPetsByUserId(req,res){
    const {id} = req.user
    try {
        const pets = Pets.findAll({
            where: {userId: id}
        })
        return res.send(pets || []);
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar pet')
    }
}

async function createPet(req, res) {
    try {
        const pet = await Pets.create(req.body)
        return res.status(201).send(pet)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao criar pet')
    }
}

async function deletePet(req, res) {
    const { id } = req.params;
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

  async function updatePet(req, res) {
    try {
      const { id } = req.params;
      const { nome, raca ,peso } = req.body;

      const pets = await Pets.findByPk(id);
      if (!pets) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }
  
      await pets.update({ nome,raca,peso });

      res.json(pets);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao atualizar usuário', detalhes: error });
    }
  }


module.exports = {
    getPets,
    getPetById,
    getPetsByUserId,
    createPet,
    deletePet,
    updatePet
}