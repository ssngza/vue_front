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
              @on-row-click="onRowClick"
              theme="Polar-bear"
              :pagination-options="{perPage:pageLength}"
          >
          </vue-good-table>
        </b-col>


        <b-col>
          <div><h2>직원 기초 정보 </h2></div>

          <b-row>

            <b-col md="4">
              <!-- table -->
              <div class="background">
                <div class="post" >
                  <img class="post-body" :src="this.emp_image2"  />
                </div>
              </div>
              <!-- 로딩중-->
            </b-col>
            <b-col>
              <!--직원 기본정보 table -->
              <div class="r1 row g-3">
                <div class="c1 col-md-6 pb-1">
                  <label for="inputEmail4" class="form-label1"><h4>사원명</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.empName}}
                  </b-form-text>
                </div>
                <div class="c2 col-md-6 pb-1">
                  <label for="inputPassword4" class="form-label2"><h4>사번</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.empCode}}
                  </b-form-text>
                </div>
                <div class="c3 col-md-6 pb-1">
                  <label for="inputEmail4" class="form-label3"><h4>생년월일</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.birthDate}}
                  </b-form-text>
                </div>
                <div class="c4 col-md-6 pb-1">
                  <<label for="inputPassword4" class="form-label4"><h4>성별</h4></label>>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.gender}}
                  </b-form-text>
                </div>
                <div class="c5 col-md-6 pb-1">
                  <label for="inputAddress" class="form-label5"><h4>부서</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.deptName}}
                  </b-form-text>
                </div>
                <div class="c6 col-md-6 pb-1">
                  <label for="inputAddress2" class="form-label6"><h4>부서번호</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.deptCode}}
                  </b-form-text>
                </div>
                <div class="c7 col-md-6 pb-1">
                  <label for="inputAddress2" class="form-label7"><h4>입사일</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.hireDate}}
                  </b-form-text>
                </div>
              </div>
              <!-- 로딩중-->
            </b-col>
          </b-row>
          <div> &nbsp </div>

          <b-row pt="5">
            <b-col>
              <!-- table -->
              <!--직원 상세 정보 table -->
              <div class="r2 row g-3">
                <div class="col-md-12 pt-2 pb-1"><h2>직원 세부 정보</h2></div>
                <div class="col-md-4 pb-1">
                  <label for="inputEmail4" class="form-label"><h4>직급</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.positionName}}
                  </b-form-text>
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputPassword4" class="form-label"><h4>전화번호</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.phoneNumber}}
                  </b-form-text>
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputEmail4" class="form-label"><h4>E-Mail</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.email}}
                  </b-form-text>
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputAddress2" class="form-label"><h4>근무지</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.workplaceName}}
                  </b-form-text>
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputAddress2" class="form-label"><h4>최종학력</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.levelOfEducation}}
                  </b-form-text>
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputAddress2" class="form-label"><h4>우편번호</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpZipCode" >
                    {{emp_detail.zipCode }}
                  </b-form-text>
                </div>
                <div class="col-md-8 pb-1">
                  <label for="inputPassword4" class="form-label"><h4>주소</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpAddress" >
                    {{emp_detail.basicAddress}}
                  </b-form-text>
                </div>
                <div class="col-md-4 pb-1">
                  <label for="inputAddress" class="form-label"><h4>상세주소</h4></label>
                  <b-form-text type="text" class="form-control" id="selectEmpDetailAddress" >
                    {{emp_detail.detailAddress}}
                  </b-form-text>
                </div>

              </div>
              <!-- 로딩중-->
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>


  </div>


</template>

<script>

import {
  BAvatar, BPagination, BFormGroup, BFormInput, BFormSelect, BRow, BCol,
} from 'bootstrap-vue'
import {VueGoodTable} from 'vue-good-table'
import {mapActions, mapState} from 'vuex'
import Vue from 'vue'
import ToastificationContent from '@/@core/components/toastification/ToastificationContent.vue'
import {image} from "vee-validate/dist/rules";

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
      pageLength: 20,
      hideHow: true,
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
      emp_detail : '',
      emp_image2: '',


    }
  },
  computed: {
    ...mapState('hr/emp', ['all_emp_list','selected_emp_detail' ]),

  },
  /**
   * 리엑트의 useEffect와 같음
   */
  created() {
    this.fetchAllEmp()
  },
  methods: {
    // 액션을 가져옴
    ...mapActions('hr/emp', ['fetchAllEmp','findEmpDetail']),
    // 검색
    advanceSearch(val) {
      this.searchTerm = val
    },
//
    onRowClick(params) {
      const clickEmp = params.row.empCode
      console.log(clickEmp)
      if (clickEmp>0) {

      } else {
        this.$store.dispatch('hr/emp/findEmpDetail', clickEmp)
      }

      setTimeout(() => {
        this.emp_detail = this.selected_emp_detail;
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
