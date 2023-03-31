import {
    searchContract
} from '@/api/logi/outsourcing'

export default {
    async searchOutsourcInfoList({ commit }, payload) {

        console.log(payload)
        try {
            const res = await searchContract(payload)
            const gridRow = res.data.gridRowJson
            commit('setGrid', gridRow)

            return res
        } catch (err) {
            throw new Error(err)
        }
    },
}
