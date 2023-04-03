import { logiApi } from '../index'
import { sys } from '../index'

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
}

// 전체조회
function searchOrderList(payload) {
  return logiApi.get('/purchase/getOrderList', {
    params: {
      startDate: payload.startDate,
      endDate: payload.endDate,
    },
  })
}

function searchItemCodeList(payload) {
  
  console.log("확인용")
  console.log(payload)
  return sys.get('/findPayStepCodeDetailList', {
    params: {
      divisionCode: payload, //품목코드보내기
    },
  })
}

export {
  // eslint-disable-next-line import/prefer-default-export
  searchOrderList,
  searchItemCodeList,
}
