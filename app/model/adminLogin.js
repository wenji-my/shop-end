'use strict';

module.exports = app => {
  const model = app.model.import('../domain/admin_login.js');
  return model;
}