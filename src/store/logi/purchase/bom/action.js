import { searchItemCodeList } from '@/api/logi/purchase'

export default {
  async SEARCH_ITEM_CODE_LIST({ commit }, payload) {
    try {
      console.log('액션에 요청오셈 ㅡㅡ', payload)
      const res = await searchItemCodeList(payload)
      const itemCodeList = res.data
      console.log(res)
      commit('SEARCH_ITEM_CODE_LIST', itemCodeList)

      return res
    } catch (err) {
      throw new Error(err)
    }
  },
}
