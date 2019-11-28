import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'http://127.0.0.1:8888/api/user/list',
    method: 'get',
    params: query
  })
}

export function fetchRoleList() {
  return request({
    url: 'http://127.0.0.1:8888/api/role/list',
    method: 'get'
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

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
