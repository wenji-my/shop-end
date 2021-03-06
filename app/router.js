'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/config',controller.config.list);

  router.post('/admin/login', controller.adminLogin.login);
  router.get('/admin/supplier/info/list', controller.supplierInfo.list);
  router.get('/admin/supplier/category/list', controller.supplierCategory.list);
  router.post('/admin/supplier/info/create', controller.supplierInfo.create);
  router.post('/admin/supplier/category/create', controller.supplierCategory.create);
  router.post('/admin/upload', controller.supplierInfo.upload);
};
