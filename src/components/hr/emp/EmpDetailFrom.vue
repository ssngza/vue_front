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

    <b-container>
      <b-row>
        <b-col md="4">
          <!-- 직원 전체 조회 table -->
          <vue-good-table
              ref="myTable"
              :columns="columns"
              :rows="all_emp_list"
              max-height="730px"
              :fixed-header="true"
              @on-row-click="selectEmp"
              theme="Polar-bear"
              :pagination-options="{perPage:pageLength}"
              :search-options="{
                enabled: true,
                trigger: 'enter',
                skipDiacritics: true,
                placeholder: '직원 정보',
                }"
          >
          </vue-good-table>
        </b-col>


        <b-col>
          <div><h2>직원 기초 정보 </h2></div>

          <b-row>

            <b-col md="4">
              <!-- table -->
              <div class="background">
                <div class="post">
                  <img class="post-body" :src="emp_image2"/>
                </div>
              </div>
              <!-- 로딩중-->
            </b-col>
            <b-col>
              <!--직원 기본정보 table -->
              <div class="r1 row g-3">
                <div class="c1 col-md-6 pb-1">
                  <label for="inputEmpName" class="form-label1"><h4>사원명</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpName" v-model="emp_detail.empName"/>
                </div>
                <div class="c2 col-md-6 pb-1">
                  <label for="inputEmpName" class="form-label2"><h4>사번</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpName" v-model="emp_detail.empCode"  disabled />
                </div>

                <div class="c3 col-md-6 pb-1">

                  <label for="inputEmpBirthDate" class="form-label3"><h4>생년월일</h4></label>
                  <div>
                    <b-input-group>
                  <b-form-input type="text" class="form-control" id="selectEmpBirthDate" v-model="emp_detail.birthDate" disabled />
                      <b-form-datepicker
                      v-model="emp_detail.birthDate"
                      show-decade-navs
                      button-only
                      right
                      locale="en-US"
                      aria-controls="example-input1"
                      @context="onContext"
                  />
                    </b-input-group>
                  </div>
                </div>
                <div class="c4 col-md-6 pb-1">
                  <label for="inputEmpGender" class="form-label4"><h4>성별</h4></label>
                  <b-form-select type="text" class="form-control" id="selectEmpGender" v-model="emp_detail.gender" :options="gender" value="emp_detail.gender" >{{emp_detail.gender}}</b-form-select>
                </div>
                <div class="c5 col-md-6 pb-1">
                  <label for="inputEmpDeptName" class="form-label5"><h4>부서</h4></label>
                    <b-form-select type="text" class="form-control" id="selectEmpDeptName" v-model="emp_detail.deptName" :options="allDept.deptCode">

                    </b-form-select>
                </div>
                <div class="c6 col-md-6 pb-1">
                  <label for="inputEmpDeptCode" class="form-label6"><h4>부서번호</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpDeptCode" v-model="emp_detail.deptCode" />
                </div>
                <div class="c7 col-md-6 pb-1">
                  <label for="inputEmpHireDate" class="form-label7"><h4>입사일</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpHireDate" v-model="emp_detail.hireDate" />
                </div>
              </div>
              <!-- 로딩중-->
            </b-col>
          </b-row>
          <div> &nbsp</div>

          <b-row pt="5">
            <b-col>
              <!-- table -->
              <!--직원 상세 정보 table -->
              <div class="r2 row g-3">
                <div class="col-md-12 pt-2 pb-1"><h2>직원 세부 정보</h2></div>
                <div class="col-md-4 pb-1">
                  <label for="inputEmpPositionName" class="form-label"><h4>직급</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpPositionName" v-model="emp_detail.positionName" />
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputEmpPhoneNumber" class="form-label"><h4>전화번호</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpPhoneNumber" v-model="emp_detail.phoneNumber" />
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputEmpEmail" class="form-label"><h4>E-Mail</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpEmail" v-model="emp_detail.email" />
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputEmpWorkPlaceCode" class="form-label"><h4>근무지</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpWorkPlaceCode" v-model="emp_detail.workplaceCode" />
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputEmpLevelOfEducation" class="form-label"><h4>최종학력</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpLevelOfEducation" v-model="emp_detail.levelOfEducation" />
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputEmpZipCode" class="form-label"><h4>우편번호</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpZipCode" v-model="emp_detail.zipCode" />
                </div>
                <div class="col-md-8 pb-1">
                  <label for="inputEmpAddress" class="form-label"><h4>주소</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpAddress" v-model="emp_detail.basicAddress" />
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputEmpDetailAddress" class="form-label"><h4>상세주소</h4></label>
                  <b-form-input type="text" class="form-control" id="selectEmpDetailAddress" v-model="emp_detail.detailAddress" />
                </div>
              </div>
              <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
                <b-button-group>
                  <b-button
                      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                      variant="primary"
                      @click="updateEmpDetail"
                  >
                    수정
                  </b-button>
                  <b-button
                      v-ripple.400="'rgba(200, 255, 255, 0.15)'"
                      variant="primary"
                  >
                    삭제
                  </b-button>
                  <b-button
                      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                      v-b-modal.openAddJounalModal
                      variant="primary"
                      style=" float: right"
                  >등록
                  </b-button>
                </b-button-group>
              </b-button-toolbar>
              <!-- 로딩중-->
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <div>
      <!-- 모달은 id 이용-->
      <!-- 전표추가 모달-->
      <!--하나의 inputForm 태그 사용 < 조건을 props로 내려줌>-->
      <b-modal
          id="openUpdateEmpInfo"
          title="직원 정보 수정"
          @ok=""
      >
        <p class="my-5">
          <InputForm
              ref="updateEmpInfo"
              modal-status="updateEmp"
          />
        </p>
      </b-modal>
    </div>


  </div>


</template>

<script>

import {
  BAvatar, BPagination, BFormGroup, BFormInput, BFormSelect, BRow, BCol,
} from 'bootstrap-vue'
import {VueGoodTable} from 'vue-good-table'
import {mapActions, mapState} from 'vuex'
import ToastificationContent from '@/@core/components/toastification/ToastificationContent.vue'
import InputForm from "@/components/account/account/Slip/InputForm.vue";
import Ripple from "vue-ripple-directive";
import select from "select";

export default {
  components: {
    InputForm,
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
      pageLength: 20,
      hideHow: true,
      emp_detail: [],
      allDept: [],
      emp_image2: '',
      activeButton : 'updateEmp',
      addBtStatus: false,
      addJournalBt: false,

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
          label: '부서이름',
          field: 'detailCodeName',
        },
      ],

      gender : [
        { value: 'key1', text: 'Male' },
        { value: 'key2', text: 'Female' },
      ],

    }
  },

  directives: {
    Ripple,
  },

  computed: {
    ...mapState('hr/emp', ['all_emp_list', 'selected_emp_detail', "all_dept_list"]),




  },


  created() {
    this.fetchAllEmp();
    this.fetchAllDepartment();
    this.emp_image2 = require(`@/assets/images/avatars/empty.png`);
  },

  methods: {
    select() {
      return select
    },
    // 액션을 가져옴
    ...mapActions('hr/emp', ['fetchAllEmp', 'findEmpDetail',"fetchAllDepartment"]),
    // 검색
    advanceSearch(val) {
      this.searchTerm = val
    },

    // 직원 정보 수정

    updateEmpDetail() {
      const updateEmp = this.emp_detail
      console.log(updateEmp)
    },

// 달력 형식 선언
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no - date - selected` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD
    },



    /*직원 1명 조회 */
    selectEmp(params) {
      console.log(params)
      this.clickEmp = params.row.empCode
      const clickEmp = this.clickEmp
      console.log(clickEmp)

      if (clickEmp > 0) {

      } else {
        this.$store.dispatch('hr/emp/findEmpDetail', clickEmp)
      }

      setTimeout(() => {
            this.emp_detail = this.selected_emp_detail;
            this.allDept=this.all_dept_list
        console.log(this.allDept)
      }, 100)

      setTimeout(() => {
        this.emp_image2 = require(`@/assets/images/avatars/${this.emp_detail.image}`);
      }, 100)

    },



  }
}

</script>
<style>
.post {
  width: 95%;
  padding-left: 5%;
  padding-top: 8%;
}

.post-body {
  height: 280px;
  width: 80%;
  background-position: center;
  background-size: cover;
  border: 5px solid;
  border-color: #161d31;

}

</style>
