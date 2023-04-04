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

  console.log("searchItemCodeList실행")
  return sys.get('/findPayStepCodeDetailList', {
    params: {
      itemClassificationCondition: payload,
    },
  })
}

export {
  // eslint-disable-next-line import/prefer-default-export
  searchOrderList,
  searchItemCodeList,
}
