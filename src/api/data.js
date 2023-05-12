import request from '@/utils/request'

export function getStepList() {
    return request({
        url: '/step/list',
        method: 'get',
    })
}

export function getCheckList(query) {
    return request({
        url: '/check/list',
        method: 'get',
        params: query
    })
}

export function saveConfig(data) {
    return request({
        url: '/config/save',
        method: 'post',
        data
    })
}