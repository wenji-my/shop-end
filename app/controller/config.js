'use strict';

const Controller = require('egg').Controller;

class ConfigController extends Controller {
  async list() {
    this.ctx.success({
      img_host: 'http://127.0.0.1:7001/'
    })
  }
}

module.exports = ConfigController;
