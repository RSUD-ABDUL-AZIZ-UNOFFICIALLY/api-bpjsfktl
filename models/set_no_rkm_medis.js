'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class set_no_rkm_medis extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          
        }


    }
    set_no_rkm_medis.init({
        no_rkm_medis: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
       
        // createdAt: { type: DataTypes.DATE, field: 'created_at' },
        // updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
        // If don't want createdAt
    }, {
        sequelize,
        modelName: 'set_no_rkm_medis',
        tableName: 'set_no_rkm_medis',
        timestamps: false,
        createdAt: false,
        updatedAt: false,



    });
    return set_no_rkm_medis;
};