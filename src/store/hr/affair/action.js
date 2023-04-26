import { getAllEmpList, getEmpDetail ,getAllDepartmentList} from '@/api/hr/affair'


// Action 명명법  ex) findEmpDetail   기능+명칭 구조로 카멜케이스 작성법

export default {

    /**
     * 직원전체조회
     * @param commitw
     * @returns {Promise<*>}
     * @constructor
     */

    async fetchAllEmp({commit}) { // 객체로 넘어오면 {}
        try {
            const response = await getAllEmpList()

            commit('SET_ALL_EMP_LIST', response.data.empList)
            // eslint-disable-next-line no-undef
            return response.data
        } catch (err) {
            throw new Error(err)
        }
    },


    /**
     * 부서전체조회
     * @param commit
     * @returns {Promise<*>}
     * @constructor
     */

    async fetchAllDepartment({commit}) { // 객체로 넘어오면 {}
        try {
            const response = await getAllDepartmentList()
            console.log(response)
            commit('SET_ALL_DEPT_LIST', response.data.list)
            // eslint-disable-next-line no-undef
            return response.data
        } catch (err) {
            throw new Error(err)
        }
    },



        async findEmpDetail({ commit }, clickEmp) {
            try {
                console.log(clickEmp)
                const response = await getEmpDetail(clickEmp)
                console.log(response.data.empDetailInfo[0])
                commit('SET_SELECTED_EMP_DETAIL', response.data.empDetailInfo[0])
            } catch (err) {
                throw new Error(err)
            }
        },


}








