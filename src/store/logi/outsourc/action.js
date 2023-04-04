import {
    insertOutsource,
    searchContract
} from '@/api/logi/outsourcing'

export default {
    async searchOutsourcInfoList({ commit }, payload) {

        console.log(payload)
        try {
            const res = await searchContract(payload)
            console.log("데이터확인")
            console.log(res)
            const gridRow = res.data.gridRowJson
            commit('setGrid', gridRow)

            return res
        } catch (err) {
            throw new Error(err)
        }
    },
    async insertOutsourcList({ commit }, payload) {

        console.log(payload)
        try {
            const res = await insertOutsource(payload)
        } catch (err) {
            throw new Error(err)
        }
    },
}
