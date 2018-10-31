/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Competenza', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Competenza: {
      type: DataTypes.STRING(500),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'Competenza'
  });
};
