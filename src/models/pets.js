const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')
const { text } = require('stream/consumers')

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
    foto:{
        type: DataTypes.TEXT,
    }
    // image_url:{
    //     type: DataTypes.TEXT
    // }
})

module.exports = Pets