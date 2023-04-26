// 상태 변경 리엑트의 reducer느낌
// Mutation 명명법  조회 : SET_XXXX_XXX, 등록&수정 : ADD_XXXX_XXX , 삭제 : REMOVE_XXXX_XXX,

export default {
    /**
     *  전표
     * @param state
     * @param allEmpList
     * @constructor
     */
    SET_ALL_EMP_LIST(state, all_emp_list) {
        console.log(all_emp_list)
        state.all_emp_list = all_emp_list
    },

    SET_ALL_DEPT_LIST(state, all_dept_list) {
        console.log(all_dept_list)
        state.all_dept_list = all_dept_list
    },



    SET_SELECTED_EMP_DETAIL(state, selected_emp_detail) {
        state.selected_emp_detail = selected_emp_detail
        console.log(selected_emp_detail)
    },

}
