<template>
    <div>

        <b-row>
            <b-col
                    md="2"
                    sm="4"
                    class="my-1"
            >
                <b-form-group
                        class="mb-0"
                >
                    <label class="d-inline-block text-sm-left mr-50">페이지 수</label>
                    <b-form-select
                            idnp="perPageSelect"
                            v-model="perPage"
                            size="sm"
                            :options="pageOptions"
                            class="w-50"
                    />
                </b-form-group>
            </b-col>
            <b-col
                    md="4"
                    sm="8"
                    class="my-1"
            >
                <b-form-group
                        label="정렬"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-size="sm"
                        label-for="sortBySelect"
                        class="mb-0"
                >
                    <b-input-group size="sm">
                        <b-form-select
                                id="sortBySelect"
                                v-model="sortBy"
                                :options="sortOptions"
                                class="w-75"
                        >
                            <template v-slot:first>
                                <option value="">
                                    -- none --
                                </option>
                            </template>
                        </b-form-select>
                        <b-form-select
                                v-model="sortDesc"
                                size="sm"
                                :disabled="!sortBy"
                                class="w-25"
                        >
                            <option :value="false">
                                Asc
                            </option>
                            <option :value="true">
                                Desc
                            </option>
                        </b-form-select>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col
                    md="5"
                    class="my-1"
            >
                <b-form-group
                        label="전체 검색"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-size="sm"
                        label-for="filterInput"
                        class="mb-0"
                >
                    <b-input-group size="sm">
                        <b-form-input
                                id="filterInput"
                                v-model="filter"
                                type="search"
                                placeholder="검색어"
                        />
                        <b-input-group-append>
                            <b-button
                                    :disabled="!filter"
                                    @click="filter = ''"
                            >
                                Clear
                            </b-button >
                            <b-button @click="openInsert">추가</b-button>
                        </b-input-group-append>

                    </b-input-group>

                </b-form-group>

            </b-col>
                <!-- 성과금 추가 인원  모달--->
            <b-modal v-model="insertModal">
            <b-form>
                <b-row>

                    <b-col md="6">
                        <b-form-group
                            label="부서코드"
                        >
                            <b-form-select
                                id="deptCode"
                                v-model="addBonusEmp.empCode"
                            />
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group
                            label="사원코드"
                        >
                            <b-form-input
                                id="empCode"
                                v-model="addBonusEmp.empCode"
                            />
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group
                            label="사원이름"
                        >
                            <b-form-input
                                id="empName"
                                v-model="addBonusEmp.empName"
                            />
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group
                            label-for="reportingDate"
                            label="지급년월"
                        >
                            <b-form-input
                                id="applyYearMonth"
                                v-model="addBonusEmp.applyYearMonth"
                                type="date"
                            />
                        </b-form-group>
                    </b-col>



                    <b-col md="6">
                        <b-form-group
                            label="성과금이름"
                        >
                            <b-form-input
                                id="bonusName"
                                v-model="addBonusEmp.bonusName"
                            />
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group
                            label="성과금 정보"
                        >
                            <b-form-input
                                id="bonusRemark"
                                v-model="addBonusEmp.bonusRemark"
                            />
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group
                            label="성과금"
                        >
                                <b-form-input
                                    id="bonus"
                                    v-model="addBonusEmp.bonus"
                                />
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group
                            label="공제액"
                        >
                            <b-form-input
                                id="deductionAmount"
                                v-model="addBonusEmp.deductionAmount"
                            />
                        </b-form-group>
                    </b-col>
                    <!-- submit and reset -->
                    <b-col>
                        <b-button
                            type="reset"
                            variant="outline-secondary"
                        >
                            Reset
                        </b-button>
                    </b-col>
                </b-row>
                </b-form>
            </b-modal>

            <transition class="start">
                <b-col cols="16 ">
                    <b-table
                        style="width: 130%;"
                            striped
                            hover
                            responsive="true"
                            :per-page="perPage"
                            :current-page="currentPage"
                            :items="formattedEmpBonus"
                            :fields="fields"
                            :sort-by.sync="sortBy"
                            :sort-desc.sync="sortDesc"
                            :sort-direction="sortDirection"
                            :filter="filter"
                            :filter-included-fields="filterOn"
                            @filtered="onFiltered"
                            @row-clicked="onRowSelected"
                    >
                    </b-table>
                    <!--    row 클릭시 수정창 띄우는 모달-->
                    <b-modal v-model="showModal" @ok="showModal2"  @cancel="resetData" dialog-class="modal-dialog2">
                        <h1 class="text-center">상여 및 성과금 수정</h1>
                        <b-table
                            ref="modalTable"
                            striped
                            hover
                            :items="this.selectedRow"
                            :fields="fields"
                            @row-clicked="updateBonus"
                            >
                        </b-table>
                        <!--   한번 더 확인하는 모달-->
                    </b-modal>
                    <b-modal v-model="showConfirmModal" @ok="confirmAction"   dialog-class="custom-modal-class">
                        <h1 class="text-center">수정하시겠습니까?</h1>
                    </b-modal>

                </b-col>
            </transition>


            <b-col
                    cols="12"
            >
                <b-pagination
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        align="center"
                        size="sm"
                        class="my-0"
                />
            </b-col>
        </b-row>

        <!--    <b-table striped hover :items="items"></b-table>-->
    </div>
</template>

<script>
import {
    BAvatar,
    BBadge,
    BButton,
    BCard,
    BCardText,
    BCol,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BInputGroup,
    BInputGroupAppend,
    BLink,
    BPagination,
    BRow,
    BTable
} from 'bootstrap-vue'

import {mapState,mapActions} from "vuex";
import {replace} from "lodash";



export default {
    name: "salaryAwards",
    components: {
        BTable,
        BAvatar,
        BBadge,
        BRow,
        BCol,
        BFormGroup,
        BFormSelect,
        BPagination,
        BInputGroup,
        BFormInput,
        BInputGroupAppend,
        BButton,
        BCard,
        BLink,
        BCardText,
    },

    // and in data
    data() {
        return {
            hideHow: true,
            perPage: 5,
            pageOptions: [3, 5, 10],
            currentPage: 1,
            sortBy: '',
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
            filterOn: [],
            totalRows: 0,
            selectedRow: [],
            showModal: false,
            editingRowId: null,
            changeData:[],
            showConfirmModal: false, // 확인창의 v-model,
            formattedEmpBonus: [], // 변환된 데이터
            reset:[],
            insertModal:false,

            addBonusEmp: [{
                empCode: '',
                applyYearMonth:'',
                bonusName: '',
                bonusRemark: '',
                bonus: '',
                deductionAmount: '',
            }],



            fields: [
                {key: 'empCode', label: '사원코드', sortable: true},
                {key: 'empName', label: '사원이름', sortable: true},
                {key: 'deptCode', label: '부서코드', sortable: true},
                {key: 'applyYearMonth', label: '지급년월', sortable: true},
                {key: 'bonusName', label: '성과금이름', sortable: true},
                {key: 'bonusRemark', label: '성과금정보', sortable: true},
                {key: 'bonus', label: '금액', sortable: true},
                {key: 'deductionAmount', label: '공제액', sortable: true},
            ],

        }
    },
    computed: {
        ...mapState('hr/salary', ['empBonus']),
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter(f => f.sortable)
                .map(f => ({text: f.label, value: f.key}))
        },

    },



    created() {
        this.fetch_bonus_emp_list();
        setTimeout(() => { this.formatEmpBonus(); }, 200)
    },

    mounted() {
        setTimeout(() => {
            this.totalRows = this.empBonus.length;
        }, 200)
    },

    methods: {
        ...mapActions('hr/salary', ['fetch_bonus_emp_list',"set_bonus"]),

        onRowSelected(items) {

            this.selectedRow = [items]
            this.showModal = true;
            this.fetch_bonus_emp_list();

        },
        resetData(){
             this.formatEmpBonus()
        },
        openInsert(){
            this.insertModal=true;
        }
        ,


        updateBonus(item, index, event) {
            // 행 클릭 시 실행될 메서드
            // item: 클릭한 행의 데이터 객체
            // index: 클릭한 행의 인덱스
            // event: 클릭 이벤트 객체


            // 이미 수정 중인 행이 있는 경우 무시
            if (this.editingRowId !== null) {
                return;
            }

            // 클릭한 행의 데이터를 수정하기 위한 input 요소 생성
            const inputElement = document.createElement("input");
            const tdElement = event.target.closest("td");
            if(tdElement.getAttribute("aria-colindex")==null){
                alert('제대로 클릭해주세요')
                return;
            }
            const index2 = tdElement.getAttribute("aria-colindex")-1;


            const column = this.fields[index2].key
            inputElement.value = tdElement.textContent.trim(); // 예시로 name 필드를 수정하도록 설정
            inputElement.addEventListener("blur", event => {
                // input 요소에서 포커스가 벗어났을 때(수정이 완료되었을 때) 실행될 로직
                this.onInputBlur(item, event.target.value,column);
            });

            // 클릭한 행의 데이터를 표시한 뒤 input 요소로 교체

            if(index2>2){
                tdElement.textContent = "";
                tdElement.appendChild(inputElement);
                console.log(column)
                inputElement.focus();
                this.editingRowId = tdElement.textContent.trim();
            }

           // 수정 중인 행의 ID 저장

        },
        onInputBlur(item, newValue,column) {
            // input 요소에서 포커스가 벗어났을 때(수정이 완료되었을 때) 실행될 메서드
            // item: 수정 중인 행의 데이터 객체
            // newValue: 수정된 값
            // 여기에 수정된 데이터 처리 로직을 구현

            // 특정 메서드 호출 등의 로직을 작성
            const tdElement = event.target.closest("td");
            tdElement.textContent = newValue;
            this.selectedRow[0][column]=newValue;
            console.log("selectedRow",this.selectedRow)
            // 수정이 완료되었으므
            // 로 input 요소를 다시 텍스트로 교체

            this.editingRowId = null; // 수정 중인 행의 ID 초기화
        },
        showModal2(event){
            event.preventDefault();
            this.showConfirmModal = true;
        },

        confirmAction() {
            this.showConfirmModal = false;
            this.showModal=false;
            // ,떼서 백단으로 보내기
            let bonusWithoutComma = this.selectedRow[0].bonus.replace(/,/g, ''); //콤마떼기
            let deductionAmountWithoutComma = this.selectedRow[0].deductionAmount.replace(/,/g, '');

            // 제거된 값으로 데이터 업데이트
            this.selectedRow[0].bonus = bonusWithoutComma;
            this.selectedRow[0].deductionAmount = deductionAmountWithoutComma;

            console.log("dddd",this.selectedRow[0].bonus,this.selectedRow[0].applyYearMonth)
             this.set_bonus(this.selectedRow[0]);

            setTimeout(() => { this.fetch_bonus_emp_list(); }, 300)
            setTimeout(() => { this.formatEmpBonus(); }, 400)


        },
        // 금액에 , 붙이기 메서드
        formatEmpBonus() {
            this.formattedEmpBonus = this.empBonus.map(item => {
                return {
                    ...item,
                    bonus: item.bonus.toLocaleString(), // 숫자에 쉼표 추가
                    deductionAmount: item.deductionAmount.toLocaleString(), // 숫자에 쉼표 추가
                };
            });
        },

        //필터용
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length
            console.log(this.totalRows + "filter")
            this.currentPage = 1
        },



    }
}


</script>

<style>
.modal-dialog2 {
     /* 모달 창을 왼쪽으로 위치 */
    max-width: 80%; /* 모달 창의 최대 가로 너비를 100%로 설정 */
    width: 100%; /* 모달 창의 가로 너비를 100%로 설정 */
}

</style>





