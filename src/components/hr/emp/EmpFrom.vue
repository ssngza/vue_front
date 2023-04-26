<template>

  <div>
    <div>
      <b-card title="HOW 직원정보 관리 ❓" v-if="hideHow!==false">
        <b-card-text>직원목록에서 직원을 클릭하면 상세정보조회가 불가능합니다.</b-card-text>
        <div>

          <b-card-text>자세한건
            <b-link href="https://www.google.com/" target="_blank">원장님</b-link>
            에게 문의하세요.
          </b-card-text>
          <b-button
              size="sm"
              variant="outline-danger"
              @click="hideHow=false"
          >
            닫기
          </b-button>
        </div>
      </b-card>
    </div>
<!--    B-card 적용-->


    <!-- table -->
    <vue-good-table
      ref="myTable"
      :columns="columns"
      :rows="all_emp_list"
      :line-numbers="true"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: '개가 선택되었습니다',
        clearSelectionText: 'clear',
        disableSelectInfo: false, // disable the select info panel on top
        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
      }"
      :search-options="{
    enabled: true,
    trigger: 'enter',
    skipDiacritics: true,
    placeholder: '직원 정보',
    }"
      :pagination-options="{
        enabled: true,
        perPage:pageLength
      }"
      theme="Polar-bear"
    >
      <div slot="selected-row-actions">
        <button @click="showJournalForm">
          해당 전표상세보기
        </button>
      </div>



    </vue-good-table>
    <!-- 로딩중-->

  </div>
</template>

<script>

import {
  BAvatar, BPagination, BFormGroup, BFormInput, BFormSelect, BRow, BCol,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import { mapActions, mapState } from 'vuex'
import Vue from 'vue'
import ToastificationContent from '@/@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    VueGoodTable,
    BAvatar,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BRow,
    BCol,

    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },

  data() {
    return {
      buttonCondition: '',
      pageLength: 20,
      hideHow : true,
      columns: [
        {
          label: '사번',
          field: 'empCode',
        },
        {
          label: '직원명',
          field: 'empName',
        },
        {
          label: '입사일',
          field: 'hireDate',
        },
        {
          label: '생년월일',
          field: 'birthDate',
        },
        {
          label: '성별',
          field: 'gender',
        },
        {
          label: '부서번호',
          field: 'deptCode',
        },
        {
          label: '부서이름',
          field: 'detailCodeName',
        },
      ],
      rows: [],
      searchTerm: '',
      selectedArray: [],
      deleteItem: [],
      editeItem: [],
      logMessage: '',

    }
  },
  computed: {
    ...mapState('hr/emp', ['all_emp_list']),

  },
  /**
   * 리엑트의 useEffect와 같음
   */
  created() {
    this.fetchAllEmp()
  },
  methods: {
    // 액션을 가져옴
    ...mapActions('hr/emp', ['fetchAllEmp']),
    // 검색
    advanceSearch(val) {
      this.searchTerm = val
    },


    /**
     * 전표삭제버튼
     */
    async deleteSlip() {
      if (!this.deleteItem.length) {
        Vue.$toast.info('승인된 전표는 삭제가 불가합니다')
        return
      }
      const response = await this.DELETE_SLIP(this.deleteItem)
      Vue.$toast.success(response.data.errorMsg)
      this.FETCH_ALL_SLIP()
    },
    /**
    * 전표수정버튼
    */
    async editSlip() {
      const selectedSlip = this.selectedArray[0].slipNo
      console.log(selectedSlip)
      this.$router.push({ name: 'journalForm', params: { selectedSlip } })
    },

    /**
     * 전표상세보기버튼
     */
    showJournalForm() {
      const selectedSlip = this.$refs.myTable.selectedRows.map(v => v.empCode)[0]
      if (this.$refs.myTable.selectedRows.length > 1) {
        Vue.$toast.info('한개만 선택해주세요')
      } else {
        this.$router.push({ name: 'journalForm', params: { selectedSlip } })
      }
    },
  },
}
</script>
