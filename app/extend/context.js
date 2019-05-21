
module.exports = {
  success(data) {
    this.body = {
      code: 1,
      data: data
    }
  },
  fail(data) {
    this.body = {
      code: 0,
      data: data
    }
  }
}