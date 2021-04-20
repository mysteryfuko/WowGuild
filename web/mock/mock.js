/*
 * @Author: your name
 * @Date: 2021-04-20 19:56:10
 * @LastEditTime: 2021-04-21 05:33:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\mock\mock.js
 */
const fs = require('fs')
const path = require('path')
const Mock = require('mockjs')// mockjs 导入依赖模块
const JSON5 = require('json5')
// 读取json文件
function getJsonFile (filePath) {
  // 读取指定json文件
  var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8')
  // 解析并返回
  return JSON5.parse(json)
}

// 返回一个函数
module.exports = function (app) {
  if (process.env.MOCK == 'true') {
    // 监听http请求
    app.get('/api/gettitle', function (rep, res) {
      // 每次响应请求时读取mock data的json文件
      // getJsonFile方法定义了如何读取json文件并解析成数据对象
      var json = getJsonFile('./data/title.json5')
      // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
      res.json(Mock.mock(json))
    })

    app.get('/api/getnews', function (rep, res) {
      var json = getJsonFile('./data/news.json5')
      res.json(Mock.mock(json))
    })

    app.get('/api/getactivity', function (rep, res) {
      var json = getJsonFile('./data/activity.json5')
      res.json(Mock.mock(json))
    })

    app.get(RegExp('/api/getpointchange' + '.*'), function (rep, res) {
      var json = getJsonFile('./data/PointChange.json5')
      res.json(Mock.mock(json))
    })

    app.get(RegExp('/api/getpoint' + '.*'), function (rep, res) {
      var json = getJsonFile('./data/Point.json5')
      res.json(Mock.mock(json))
    })

    app.get(RegExp('/api/getplayer' + '.*'), function (rep, res) {
      var json = getJsonFile('./data/Player.json5')
      res.json(Mock.mock(json))
    })
  }
}
