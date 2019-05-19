module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplier_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING},
  });
}