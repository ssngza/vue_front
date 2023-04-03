/* eslint-disable import/prefer-default-export */

import { logiApi } from '../index'

// 조회

function searchContract(date) {

    console.log(date)
    const {
        searchDateCondition
        ,startDate
        ,endDate
    } = date
    return logiApi.get('/outsourc/searchOderableList', {
        params: {
            searchDateCondition,
            startDate,
            endDate,
        },
    })


}
export {
    searchContract
}
