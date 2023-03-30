<template>
  <div>
  <CommonGrid
    title="거래처코드"
    grid-type="grid"
    :buttonlist="buttonList"
  />
  </div>
</template>

<script>
import CommonGrid from '@/components/logistic/sales/gridComponent/CommonGrid.vue'

export default {
  components:{
    CommonGrid

  },
  data: ()=>({
    buttonList: [
      {
        value:'조회',
        event:'search',
        method:''
      },
      {
        value:'추가',
        event: 'add',
      },
      {
        value:'삭제',
        event:'delete',
      },
      {
        value:'저장',
        event:'save'
      },
    ]
  })
}
</script>

<style>

</style>
