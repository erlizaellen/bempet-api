const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const Pets = sequelize.define('Pets', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    raca:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nascimento:{
        type: DataTypes.DATE,
        allowNull: false
    },
    peso:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    // image_url:{
    //     type: DataTypes.TEXT
    // }
})

module.exports = Pets