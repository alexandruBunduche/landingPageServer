/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CandidatoCompetenza', {
    idCandidato: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'candidato',
        key: 'Id'
      }
    },
    IdCompetenza: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Competenza',
        key: 'id'
      }
    }
  }, {
          tableName: 'CandidatoCompetenza',
          timestamps: false
  });
};
