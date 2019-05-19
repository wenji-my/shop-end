'use strict';

const Controller = require('egg').Controller;

class SupplierCategoryController extends Controller {
  async create(ctx) {
    const { name } = ctx.request.body;
    const res = await ctx.model.SupplierCategory.create({ name })
    ctx.success(true)
  }

  async list(ctx) {
    const res = await this.ctx.model.SupplierCategory.findAll()
    const data = []
    for (const item of res) {
      data.push({
        name: item.dataValues.name
      })
    }
    ctx.success(data)
    // let {name,page,limit,type} = this.ctx.query
    // limit=Number(limit);
    // let offset=(Number(page)-1)*limit;
    // const op = this.app.Sequelize.Op
    // const res = await this.ctx.model.SupplierCategory.findAndCountAll({
    //   where: {
    //     name: name?name:''
    //   },offset,limit
    // })
    // console.log(res)
  }

  
}

module.exports = SupplierCategoryController;
