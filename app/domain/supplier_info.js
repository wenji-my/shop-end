module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplier_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    logo: { type: DataTypes.STRING},
    name: { type: DataTypes.STRING},
    category_id: { type: DataTypes.INTEGER},
    link_man: { type: DataTypes.STRING},
    phone: { type: DataTypes.STRING},
    address: { type: DataTypes.STRING},
    status: { type: DataTypes.INTEGER},
  });
}