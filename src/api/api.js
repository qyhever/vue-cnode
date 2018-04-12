import axios from '@/kits/axios'
import qs from 'qs'
import TopicsList from '@/api/topics.json'

export function topicsList(params) {
  return axios.get('/topics', { params }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function topicsDetail(id) {
  return axios.get(`/topic/${id}`).then(res => {
    return Promise.resolve(res.data)
  })
}

export function userInfo(name) {
  return axios.get(`/user/${name}`).then(res => {
    return Promise.resolve(res.data)
  })
}
/*
  {avatar_url: 'xxx', id: 'xxx', loginname: 'xxx', success: true}
*/
export function login(token) {
  return axios.post('/accesstoken', qs.stringify({ accesstoken: token })).then(res => {
    return Promise.resolve(res.data)
  })
}

export function addPost(params) {
  return axios.post('/topics', qs.stringify(params)).then(res => {
    return Promise.resolve(res.data)
  })
}