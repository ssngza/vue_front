<template>
  <div>
    <!-- 전표 모달 내용
     and 연산자 or 연산자는 아래와 같이 한개씩 다 비교해줘야한다!!! -->
    <b-form
      v-if="modalStatus==='addSlip' || modalStatus==='editSlip'"
    >
      <b-row>
        <b-col md="6">
          <b-form-group
            label="기수"
            label-for="accountPeriodNo"
          >
            <b-form-input
              v-if="modalStatus==='addSlip'"
              id="accountPeriodNo"
              v-model="slipForm.accountPeriodNo"
              disabled
            />
            <b-form-input
              v-else
              id="accountPeriodNo"
              v-model="editSlip[0].accountPeriodNo"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="전표일련번호"
            label-for="slipNo"
          >
            <b-form-input
              v-if="modalStatus==='addSlip'"
              id="slipNo"
              v-model="slipForm.slipNo"
              disabled
            />
            <b-form-input
              v-else
              id="slipNo"
              v-model="editSlip[0].slipNo"
              disabled
            />
          </b-form-group>
        </b-col>

        <b-col md="6">
          <b-form-group
            label="전표유형"
            label-for="slipType"
          >
            <b-form-input
              v-if="modalStatus==='addSlip'"
              id="slipType"
              v-model="slipForm.slipType"
              disabled
            />
            <b-form-input
              v-else
              id="slipType"
              v-model="editSlip[0].slipType"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="작성자코드"
            label-for="reportingEmpCode"
          >
            <b-form-input
              v-if="modalStatus==='addSlip'"
              id="reportingEmpCode"
              v-model="slipForm.reportingEmpCode"
              disabled
            />
            <b-form-input
              v-else
              id="reportingEmpCode"
              v-model="editSlip[0].reportingEmpCode"
              disabled
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="품의내역"
            label-for="expenseReport"
          >
            <div class="form-label-group">
              <b-form-input
                v-if="modalStatus==='addSlip'"
                id="expenseReport"
                v-model="slipForm.expenseReport"
              />
              <b-form-input
                v-else
                id="expenseReport"
                v-model="editSlip[0].expenseReport"
              />
            </div>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-for="reportingDate"
            label="작성날짜"
          >
            <b-form-input
              v-if="modalStatus==='addSlip'"
              id="reportingDate"
              v-model="slipForm.reportingDate"
              type="date"
            />
            <b-form-input
              v-else
              id="reportingDate"
              v-model="editSlip[0].reportingDate"
              type="date"
            />

          </b-form-group>
        </b-col>
        <!-- submit and reset -->
        <b-col>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-secondary"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>


  </div>
</template>
<script>



import {
  BRow, BCol, BFormGroup, BFormInput, BForm, BButton, BFormSelect,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import AccountCodeModal from '@/components/account/modal/AccountCodeModal.vue'
import AccountCustomerCodeModal from '@/components/account/modal/AccountCustomerCodeModal.vue'
import AccountControllCodeModal from '@/components/account/modal/AccountControllCodeModal.vue'

export default {
  components: {
    AccountControllCodeModal,
    AccountCustomerCodeModal,
    AccountCodeModal,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BFormSelect,

  },
  directives: {
    Ripple,
  },
  props: ['modalStatus', 'editSlip', 'editJournal'],
  data() {
    return {
      searchCondition: '',
      searchJounalDetailCondition: '',
      resultCode: '',
      options: [
        { value: '대변', text: '대변' },
        { value: '차변', text: '차변' },
      ],
      /**
       * 전표객체
       */
      slipForm: {
        slipNo: 'NEW',
        accountPeriodNo: '6', // 2020년은 기수일련번호 ->  4
        slipType: '결산',
        reportingDate: '',
        reportingEmpCode: sessionStorage.getItem('empCode'), // 작성사코드
        expenseReport: '',
        approvalDate: '',
        reportingEmpName: sessionStorage.getItem('empName'), // 로그인 이름
        slipStatus: '',
        deptCode: 'DPT-01',
        status: '',
      },

    }
  },






  methods: {
    // 계정코드 and 계정명 모달
    openAccountCodeModal(name) {
      if (name === 'accountName') {
        this.searchCondition = 'accountName'
      } else {
        this.searchCondition = 'accountCode'
      }
      // 클릭시 모달열떄  1번 모달 오픈 , 2번 모달 id
      this.$root.$emit('bv::show::modal', 'accountCode', '#focusThisOnClose')
    },

    // 거래처 코드 모달
    openAccountCustomerModal() {
      this.$root.$emit('bv::show::modal', 'CustomerCode', '#focusThisOnClose')
    },

    /**
     * 분개상세 항목 모달
     */
    openAccountControlModal(name) {
      console.log(name)
      if (name === 'accountControlName') {
        this.searchJounalDetailCondition = 'accountControlName'
      } else {
        this.searchJounalDetailCondition = 'accountControlType'
      }
      this.$root.$emit('bv::show::modal', 'AccountControllCode', '#focusThisOnClose')
    },

    // 계정과목,계정코드
    searchCode() {
      // 문자열이면 true
      if (isNaN(this.resultCode)) {
        this.journalForm.accountName = this.resultCode
        this.editJournal.accountName = this.resultCode
      } else {
        this.journalForm.accountCode = this.resultCode
        this.editJournal.accountName = this.resultCode
      }
    },

    // 거래처코드
    searchCustomerCode(selectedItem) {
      const { customerCode, customerName } = selectedItem[0]

      this.journalForm.customerCode = customerCode
      this.journalForm.customerName = customerName
      this.editJournal.customerCode = customerCode
      this.editJournal.customerName = customerName
    },

    /**
     *  분개상세 코드 조회후 클릭시 결과 들어오는곳
     */
    searchControlCode(selectedItem) {
      const { accountControlType, accountControlName } = selectedItem[0]
      this.journalDetailForm.accountControlType = accountControlType
      this.journalDetailForm.accountControlName = accountControlName
    },
  },

}
</script>
