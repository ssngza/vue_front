import mutations from './mutation'
import actions from './action'

// State 명명법  ex) all_emp_list  소문자 및 단어사이 _
export default {
    namespaced: true,
    state: {
        all_emp_list: [],
        selected_emp_detail : [],
        all_dept_list : [],

    },
    getters: {
/*        GET_SELETED_SLIP(state) {
            return Array.of(state.slipForm)
        },
   */
    },

    mutations,

    actions,

}

