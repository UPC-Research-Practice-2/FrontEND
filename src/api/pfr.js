import request from '../util/request'

export function getPFRDetail(patientNumber) {
    return request({
        url: '/pfr/detail.do',
        method: 'get',
        params: {patientNumber: patientNumber}
    })
}

export function setPFRDetail(patientNumber, operation, data) {
    return request({
        url: '/pfr/pfr.do',
        method: 'post',
        data: {
            patientNumber: patientNumber,
            operation:operation,
            data:data
        }
    })
}
