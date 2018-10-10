/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipologiatitolodistudio', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Titolo: {
      type: DataTypes.STRING(500),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'tipologiatitolodistudio'
  });
};
