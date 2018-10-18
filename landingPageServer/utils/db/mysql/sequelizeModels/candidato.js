/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('candidato', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    Cognome: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(500),
      allowNull: false,
      unique: true
    },
    DataDiNascita: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TitoloDiStudio: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tipologiatitolodistudio',
        key: 'Id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lastRegisterAttempt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'candidato'
  });
};
