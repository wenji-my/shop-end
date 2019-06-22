module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_login', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login_name: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING},
  });
}