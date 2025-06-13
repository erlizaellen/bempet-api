function validateCreatePet(req, res, next){
    const {nome, raca, nascimento, peso} = req.body;
    const user = req.user

    if (!nome || !raca || !nascimento || !peso || !user){
        return res.status(400).send('Todos os campos sao obrigatorios')
    }
    if (nome.length > 100){
        return res.status(400).send('Nome do pet não pode ter mais de 100 caracteres')
    }
    if (raca.length > 50){
        return res.status(400).send('Raça do pet não pode ter mais de 50 caracteres')
    }
    
    req.body.userId = user.id

    next();
} 

function validateDeletePet(req, res, next){
    const {id} = req.params;
    if (!id) {
        return res.status(400).send('Id do pet é obrigatoria')
    }
    next();
}

module.exports = {
    validateCreatePet,
    validateDeletePet
}