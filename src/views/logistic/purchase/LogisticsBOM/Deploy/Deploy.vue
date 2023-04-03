<template>
  <div>
    <div>
      <legend>품목분류</legend>
      <b-form-radio-group
          v-model="divisionCode"
          :options="divisionOptions"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
      >
      </b-form-radio-group>
      <div class="mt-3">품목분류: {{ divisionCode }}</div>
    </div>
    <div>
      <legend>BOM 검색조건</legend>
      <b-form-radio-group
          v-model="condition"
          :options="conditionOptions"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
      >
      </b-form-radio-group>
      <div class="mt-3">BOM 검색조건: {{ condition }}</div>
    </div>

    <div style="float: left; display: inline-flex">
    <b-form-input
        id="item-Code"
        v-model="itemCode"
        placeholder="품목코드검색"
        name="itemCode"
        class="mb-md-1 ml-1"
    />
      <b-button
          variant="outline-primary"
          v-b-modal.itemCode
          class="mb-md-1 ml-1"
          @click="searchItemCode"
      >
        검색
      </b-button>
<!--모달창 데이터 불러오기-->
      <b-modal
          id="itemCode"
          title="품목코드"
          cancel-variant="outline-secondary"

      >
        <b-card
            class="scrollStyle"
            style="margin:auto; overflow-y: scroll; height: 50vh; padding-left: 50px"
        >
          <b-table
              hover
              selectable
              :select-mode="'single'"
              :fields="fields_itemCode"
              :items="itemCodeList"
              @row-clicked="companyCodeClick"
          />
        </b-card>
      </b-modal>
<!--모달창 만드는중-->
      <b-button variant="outline-primary">
          BOM 조회
      </b-button>
    </div>

  <b-table
      style="max-height: 300px; overflow: auto; width: 100%"
      responsive
      :items="estimateDetailList"
      :fields="fields_bom"
      class="mb-0 scrollStyle"
  />
<!--    수정하기-->
  </div>
</template>

<script>
import {BButton, BTable} from 'bootstrap-vue'
import {mapActions, mapState} from 'vuex'


export default {
  name: 'Deploy',
  components: {
    BTable,
    BButton,
  },
  computed: { /*템플릿의 데이터 표현을 더 직관적이고 간결하게 도와주는 속성*/
    /*...mapState('logi/sales', ['estimateDetailList']),*/
/*    ...mapState({
      itemCodeList: state => state.logi.purchase.bom.itemCodeList,
    }),*/
    ...mapState('logi/bom', ['itemCodeList'])
  },
  methods : {
    ...mapActions('logi/bom', ['SEARCH_ITEM_CODE_LIST']),
    searchItemCode(){
      console.log("클릭이벤트")
      console.log(this.divisionCode)
      let divisionCode=this.divisionCode
      this.SEARCH_ITEM_CODE_LIST(this.divisionCode)
    }/*vue 인스턴스가 사용할 함수를 저장하고있는 속성*/
  },
  data() { /*객체 or 함수 형태로 vue 인스턴스가 사용할 정보 가진 속성*/ /*함수형태*/
    return {
      fields_bom: [
        {key: 'bomNo', label: 'BOM번호', sortable: 'true',},
        {key: 'bomLevel', label: 'BOM레벨',},
        {key: 'parentItemCode', label: '상위품목코드',},
        {key: 'itemCode', label: '품목코드',},
        {key: 'itemName', label: '품목명',},
        {key: 'unitOfStock', label: '단위',},
        {key: 'netAmount', label: '정미수량',},
        {key: 'lossRate', label: '손실율',},
        {key: 'necessaryAmount', label: '필요수량',},
        {key: 'leadTime', label: '리드타임',},
        {key: 'isLeaf', label: 'isLeaf',},
        {key: 'description', label: '비고',},
      ],
      divisionCode: 'IT-CI',
      divisionOptions: [
        { item: 'IT-CI', name: '완제품' },
        { item: 'IT-SI', name: '반제품' },
        { item: 'IT-MA', name: '원재료' }
      ],
      condition: 'forward',
      conditionOptions: [
        { item: 'forward', name: '정전개' },
        { item: 'reverse', name: '역전개' },
      ],
      fields_itemCode: [
        { key: 'detailCode', label: '상세코드번호' },
        { key: 'detailCodeName', label: '상세코드이름' },
      ],
    }
  },
}
/*watch는 vue 내부의 요소가 변경되었음을 감지해준다.
또한 뷰 안에서의 라우터가 변경음을 감지해준다.*/
</script>
