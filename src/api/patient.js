import request from '../util/request'

export function listPatients() {
    return request({
        url: '/patient/list.do',
        method: 'get',
    })
}

export function login(phoneNumber, number, birthPlace, gender, age, nation, isMarried, inPatientDate, recordDate) {
    return request({
        url: '/patient/list.do',
        method: 'get',
        data: {
            phoneNumber: phoneNumber,
            number: number,
            birthPlace: birthPlace,
            gender: gender,
            age: age,
            nation: nation,
            isMarried: isMarried,
            inPatientDate: inPatientDate,
            recordDate: recordDate
        }
    })
}

export function delPatient(patientNumber) {
    return request({
        url: '/patient/del.do',
        method: 'post',
        data: {
            patientNumber: patientNumber
        }
    })
}