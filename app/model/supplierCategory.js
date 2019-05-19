'use strict';

module.exports = app => {
  const model = app.model.import('../domain/supplier_category');
  return model;
}