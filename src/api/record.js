import request from '../util/request'

export function listRecords() {
    return request({
        url: '/record/list.do',
        method: 'get',
    })
}

export function getDescription(number) {
    return request({
        url: '/record/recordDetail.do',
        method: 'get',
        params: {parameter: 'description', number: number}
    })
}

export function setRecord(param, number, data) {
    return request({
        url: '/record/record.do',
        method: 'post',
        data: {
            parameter: param,
            number: number,
            data: data
        }
    })
}

export function getComparison(number) {
    return request({
        url: '/record/recordDetail.do',
        method: 'get',
        params: {parameter: 'comparison', number: number}
    })
}

export function getRecoverySituation(number) {
    return request({
        url: '/record/recordDetail.do',
        method: 'get',
        params: {parameter: 'recoverySituation', number: number}
    })
}
