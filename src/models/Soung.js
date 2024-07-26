const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');


const Soung = sequelize.define('soung', {

    name:{
        type: DataTypes.STRING,
        allowNull: false
    },

    artist:{
        type: DataTypes.STRING,
        allowNull: false
    },
    genre:{
        type: DataTypes.STRING,
        allowNull: false
    },

    releaseData :{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    
   

});

module.exports = Soung;