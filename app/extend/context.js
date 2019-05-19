
module.exports = {
  success(data) {
    this.body = {
      code: 1,
      data: data
    }
  }
}