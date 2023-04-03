<template>
  <div>
    <div  style="margin: 30px 0 0 -14px; width: 550px; display: flex">

      <b-button-group style="height: 80%">
        <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
        >
          검색
        </b-button>
        <!--        이벤트걸기-->
        <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
        >
          BOM조회
        </b-button>
      </b-button-group>

    </div>

    <div  style="margin: 30px 0 0 -14px; width: 550px; display: flex">

      <b-button-group style="height: 80%">
        <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
        >
          새로운 항목 추가
        </b-button>

        <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
        >
          삭제
        </b-button>

        <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
        >
          일괄저장
        </b-button>
      </b-button-group>

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
import {BButton, BButtonGroup, BTable} from 'bootstrap-vue'
import { mapState } from 'vuex'

export default {
  name: 'Regist',
  components: {
    BTable,
    BButton,
    BButtonGroup,
  },
  computed: {
    ...mapState('logi/sales', ['estimateDetailList']),
  },
  /*  수정하기*/
  data() {
    return {
      fields: [
        {key: 'NO', label: 'NO', sortable: 'true',},
        {key: 'itemClassificationName', label: '품목구분',},
        {key: 'itemCode', label: '품목코드',},
        {key: 'itemName', label: '품목명',},
        {key: 'netAmount', label: '정미수량',},
        {key: 'description', label: '설명',},
        {key: 'status', label: 'status',},
        {key: 'itemClassification', label: 'itemClassification',},
        {key: 'parentItemCode', label: 'parentItemCode',},
        {key: 'beforeStatus', label: 'beforeStatus',},
        {key: 'deleteStatus', label: 'deleteStatus',},
      ],
    }
  },
}
</script>
