export default {
  SEARCH_ITEM(state, itemList) {
    state.itemList = itemList
  },
  GET_WAREHOUSE_LIST(state,warehouseList) {
    state.warehouseList=warehouseList
  },
  setTable(state, tableColumns) {
    state.tableColumns = tableColumns[0].tableColumns
    state.detailTableColumns = tableColumns[0].detailTableColumns
  },

  setGrid(state, gridRow) {
    state.grid = gridRow
  },

  GET_WAREHOUSE_DETAIL_LIST(state,payload){
    state.warehouseDetailList=payload
  }


}

