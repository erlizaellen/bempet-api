
function validateCreatePet(req, res, next){
    const {nome, raca, nascimento, peso} = req.body;
    const user = req.user
    
    if (!nome || !raca || !nascimento || !peso) {


        return res.status(400).send('Todos os campos sao obrigatorios')
    }
    if (nome.length > 100) {
        return res.status(400).send('Nome do pet não pode ter mais de 100 caracteres')
    }
    if (raca.length > 50) {
        return res.status(400).send('Raça do pet não pode ter mais de 50 caracteres')
    }

    
    req.body.userId = user.id


    next();
}

 async function validateDeletePet(req, res, next) {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send('Id do pet é obrigatoria')
    }

    const existPet =await Pets.findOne({
        where:{
             id: id
        }
    })
    if(!existPet){
        return res.status(400).send("pet não  existe mais")
    }
    next();
}
async function validatePutPet(req, res,next) {
     const { nome, peso } = req.body;

    if ( !nome || !peso) {
        return res.status(400).send('Todos os campos sao obrigatorios')
    }
    if (nome.length > 100) {
        return res.status(400).send('Nome do pet não pode ter mais de 100 caracteres')
    }

    next();
}   



module.exports = {
    validateCreatePet,
    validateDeletePet, 
    validatePutPet
}