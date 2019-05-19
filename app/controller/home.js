'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async api() {
    const { ctx } = this;
    const res = await ctx.model.SupplierCategory.findAll()
    console.log(res)
    ctx.success(res)
  }
  async add() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const res = await ctx.model.SupplierCategory.create({ name })
    console.log(res)
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
