import { logiApi } from '../index'

function searchItem(divisionCode) {
  console.log(divisionCode)
  return logiApi.get('/base/codeList', {
    params: {
      divisionCode,
    },
  })
}
function getStandardUnitPrice(itemCode) {
  console.log(itemCode)
  return logiApi.get('/base/getStandardUnitPrice', {
    params: {
      itemCode,
    },
  })
}


function getWarehouseList() {
  console.log("getWarehouseList")
  return logiApi.get('/base/warehouseInfo')
}

function getWarehouseDetailList(warehouseCode) {
  console.log(warehouseCode)
  return logiApi.get('/purchase/warehouseStockList',warehouseCode)
}


export {
  searchItem, getStandardUnitPrice,getWarehouseList,getWarehouseDetailList
}
