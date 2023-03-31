<template>

  <component :is="'b-card'">

    <b-tabs pills>
      <b-tab
          active
      >
        <template #title>
          <feather-icon
              icon="CornerDownRightIcon"
              size="16"
              class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">BOM 정전개/역전개</span>
        </template>
        <!--  내용물 컴포넌트       -->
        <Deploy />
      </b-tab>

      <b-tab >
        <template #title>
          <feather-icon
              icon="CornerDownRightIcon"
              size="16"
              class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">BOM 등록/수정</span>
        </template>
        <!--  내용물 컴포넌트       -->
        <Regist/>
      </b-tab>

    </b-tabs>
  </component>

</template>

<script>

import {
  BTab, BTabs, BCard,
} from 'bootstrap-vue'

import Deploy from "@/views/logistic/purchase/LogisticsBOM/Deploy/Deploy";
import Regist from "@/views/logistic/purchase/LogisticsBOM/Regist/Regist";

export default {
  components: {
    Regist,
    Deploy,
    BTab,
    BTabs,
    BCard,
  },
}

</script>

<style  lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>