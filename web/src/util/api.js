/*
 * @Author: your name
 * @Date: 2021-04-20 19:31:29
 * @LastEditTime: 2021-05-05 17:19:59
 * @LastEditors: MysteryFuko
 * @Description: In User Settings Edit
 * @FilePath: \web\src\util\api.js
 */
import axios from 'axios'
import { ElLoading } from 'element-plus'

let loadingInstance

function startLoading () {
  loadingInstance = ElLoading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading () {
  loadingInstance.close()
}

axios.interceptors.request.use(config => {
  startLoading()
  return config
})
// 响应数据拦截器
axios.interceptors.response.use(response => {
  endLoading()
  return response
})

export async function getTitle () {
  var data = ''
  await axios.get('/api/gettitle').then(res => {
    data = res.data
  })
  return data
}

export async function getNews () {
  var data = ''
  await axios.get('/api/getnews').then(res => {
    data = res.data
  })
  return data
}

export async function getActivity () {
  var data = ''
  await axios.get('/api/getactivity').then(res => {
    data = res.data
  })
  return data
}

export async function getPointChange (id, page = 1) {
  var data = ''
  await axios.get(`/api/getpointchange/?id=${id}&page=${page}`).then(res => {
    data = res.data
  })
  return data
}

export async function getPoint (id, page = 1) {
  var data = ''
  await axios.get(`/api/getpoint/?id=${id}&page=${page}`).then(res => {
    data = res.data
  })
  return data
}

export async function getPlayer (name, id, page = 1) {
  var data = ''
  await axios.get(`/api/getplayer/?name=${name}&belong=${id}&page=${page}`).then(res => {
    data = res.data
  })
  return data
}
