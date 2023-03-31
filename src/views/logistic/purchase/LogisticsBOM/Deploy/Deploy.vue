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
      ></b-form-radio-group>
      <div class="mt-3">Selected: {{ divisionCode }}</div>
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
      ></b-form-radio-group>
      <div class="mt-3">Selected: {{ condition }}</div>
    </div>

    <div style="float: left; display: inline-flex">

    <b-form-input
        v-model="searchQuery"
        placeholder="품목코드검색"
    />

      <b-button variant="outline-primary">
        검색
      </b-button>

        <b-button variant="outline-primary">
          BOM 조회
        </b-button>

    </div>


  <b-table
      style="max-height: 300px; overflow: auto; width: 100%"
      responsive
      :items="estimateDetailList"
      :fields="fields"
      class="mb-0 scrollStyle"
  />
<!--    수정하기-->

  </div>
</template>

<script>
import {BButton, BTable} from 'bootstrap-vue'
import { mapState } from 'vuex'


export default {
  components: {
    BTable,
    BButton,
  },
  computed: {
    ...mapState('logi/sales', ['estimateDetailList']),
  },
/*  수정하기*/
  data() {
    return {
      fields: [
        {
          key: 'bomNo',
          label: 'BOM번호',
          sortable: 'true',
        },
        {
          key: 'bomLevel',
          label: 'BOM레벨',
        },
        {
          key: 'parentItemCode',
          label: '상위품목코드',
        },
        {
          key: 'itemCode',
          label: '품목코드',
        },
        {
          key: 'itemName',
          label: '품목명',
        },
        {
          key: 'unitOfStock',
          label: '단위',
        },
        {
          key: 'netAmount',
          label: '정미수량',
        },
        {
          key: 'lossRate',
          label: '손실율',
        },
        {
          key: 'necessaryAmount',
          label: '필요수량',
        },
        {
          key: 'leadTime',
          label: '리드타임',
        },
        {
          key: 'isLeaf',
          label: 'isLeaf',
        },
        {
          key: 'description',
          label: '비고',
        },
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
    }
  },
}

</script>
