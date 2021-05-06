/*
 * @Author: MysteryFuko
 * @Date: 2021-04-20 20:46:14
 * @LastEditors: MysteryFuko
 * @LastEditTime: 2021-05-06 15:36:52
 * @Description: file content
 * @FilePath: \web\vue.config.js
 */
module.exports = {
  devServer: {
    before: require('./mock/mock.js')// 引入mock/mock.js
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Index Page'
    }
  }
}
