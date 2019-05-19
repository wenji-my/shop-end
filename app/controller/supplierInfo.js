'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const pump = require('mz-modules/pump');
const uuid = require('uuid/v1')

class SupplierInfoController extends Controller {
  async echo() {
    const stream = await this.ctx.getFileStream();
    // console.log(stream)
    if (!stream.filename) { // 注意如果没有传入图片直接返回
      return;
    }
    try {
      const name = uuid();
      const target = 'app/public/images/' + name + '.' + stream.filename.split('.')[1];
      const writeStream = fs.createWriteStream(target);
      await pump(stream, writeStream);
      // await this.ctx.helper.saveFile(stream)
      this.ctx.success(name + '.' + stream.filename.split('.')[1]);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = SupplierInfoController;
