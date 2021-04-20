module.exports = {
  devServer: {
    before: require('./mock/mock.js')// 引入mock/mock.js
  }
}
