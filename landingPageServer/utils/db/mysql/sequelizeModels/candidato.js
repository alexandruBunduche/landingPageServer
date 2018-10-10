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
    }
  }, {
          // don't delete database entries but set the newly added attribute deletedAt
          // to the current date (when deletion was done). paranoid will only work if
          // timestamps are enabled
          paranoid: false,

          // don't use camelcase for automatically added attributes but underscore style
          // so updatedAt will be updated_at
          underscored: false,

          // disable the modification of table names; By default, sequelize will automatically
          // transform all passed model names (first parameter of define) into plural.
          // if you don't want that, set the following
          freezeTableName: true,

          // define the table's name
          modelName: 'candato'
  });
};
