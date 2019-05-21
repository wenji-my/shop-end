'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const pump = require('mz-modules/pump');
const uuid = require('uuid/v1')

class SupplierInfoController extends Controller {
  async upload() {
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

  async list() {
    const res = await this.ctx.model.SupplierInfo.findAll()
    const data = []
    for (const item of res) {
      const value = item.dataValues
      const category = await this.ctx.model.SupplierCategory.findByPk(value.category_id)
      data.push({
        logo: value.logo,
        name: value.name,
        category: category.dataValues.name,
        link_man: value.link_man,
        phone: value.phone,
        address: value.address,
        status: value.status
      })
    }
    this.ctx.success(data)
  }

  async create() {
    const {ctx} = this;
    const {logo,address,category,linkman,name,phone,status} = ctx.request.body
    const category1 = await ctx.model.SupplierCategory.findOne({
      where: {
        name: category
      }
    })
    console.log(category1 ? category1.dataValues.id:category1)
    if (!category1) {
      // 分类不存在
    } else {
      const supplier = await ctx.model.SupplierInfo.findOne({
        where: {
          name: name
        }
      })
      if (supplier) {
        ctx.fail('店铺已存在')
        return
      }
      const res = await ctx.model.SupplierInfo.create({
        logo: logo,
        name: name,
        category_id: category1.dataValues.id,
        link_man: linkman,
        phone: phone,
        address: address,
        status: parseInt(status),
      })
      if (res) ctx.success(true)
    }
  }
}

module.exports = SupplierInfoController;
