'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/config',controller.config.list);
  router.get('/admin/supplier/category/list', controller.supplierCategory.list);
  router.post('/admin/supplier/category/create', controller.supplierCategory.create);
  router.post('/admin/upload', controller.supplierInfo.echo);
};
