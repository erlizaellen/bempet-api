const jwt = require('jsonwebtoken');
const { Users } = require ('../models');
require('dotenv').config();
const bcrypt = require ('bcrypt');

async function login(req, res){
    console.log(req.body);
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({
            where: {
                email: email
            }
        })
        if(!user) {
            return res.status(401).send({
                error: 'Usuário não encontrado'
            })
        }
    
        const match = await bcrypt.compare(password, user.password)
        if(!match){
            return res.status(401).send({
                error: 'Senha incorreta'
            })
        }

        const token = jwt.sign(
            {id: user.id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        )

        return res.send({
            token
        })


    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
   
}

module.exports = {
    login
}
