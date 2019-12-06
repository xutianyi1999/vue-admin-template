import request from '@/utils/request'

const parentUrl = 'http://127.0.0.1:8888/api'

export function fetchList(query) {
  return request({
    url: parentUrl + '/user/list',
    method: 'get',
    params: query
  })
}

export function createArticle(data) {
  return request({
    url: parentUrl + '/user/save',
    method: 'post',
    params: data
  })
}

export function fetchRoleList() {
  return request({
    url: parentUrl + '/role/list',
    method: 'get'
  })
}

export function userDelete(idList) {
  return request({
    url: parentUrl + '/user/delete',
    method: 'post',
    params: { idList }
  })
}

export function userEdit(data) {
  return request({
    url: parentUrl + '/user/edit',
    method: 'post',
    params: data
  })
}

export function checkUsernameExist(username) {
  return request({
    url: parentUrl + '/user/isUsernameExist',
    method: 'get',
    params: { username }
  })
}

export function checkEmailExist(email) {
  return request({
    url: parentUrl + '/user/isEmailExist',
    method: 'get',
    params: { email }
  })
}

export function fetchArticle(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}
