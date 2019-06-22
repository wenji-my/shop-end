'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class AdminLogin extends Controller {

  async login() {
    // this.test()
    // return
    const {ctx} = this
    console.log(ctx.request.body)
    const { username, password } = ctx.request.body
    const user = await ctx.model.AdminLogin.findOne({where: { login_name: username}})
    if (!user) {
      ctx.fail('用户名或密码错误')
      // return
    }
    // 密码加密
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash, bcrypt.compareSync(password, hash))
    const token = jwt.sign({ username, password }, 'hello');
    const decoded = jwt.verify(token, 'hello')
    console.log(token, decoded)
    ctx.success(true)
  }

  async test() {
    const {ctx} = this
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync('123', salt);
    const user = await ctx.model.AdminLogin.findOne({where: { login_name: 'admin'}})
    if (user) {
      user.update({
        password: hash
      })
    } else {
      await ctx.model.AdminLogin.create({login_name: 'admin', password: hash})
    }
  }
}
module.exports = AdminLogin