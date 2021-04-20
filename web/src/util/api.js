/*
 * @Author: your name
 * @Date: 2021-04-20 19:31:29
 * @LastEditTime: 2021-04-21 05:51:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\util\api.js
 */
import axios from 'axios'

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
  await axios.get(`/api/getplayer/?name=${name}&id=${id}&page=${page}`).then(res => {
    data = res.data
  })
  return data
}
