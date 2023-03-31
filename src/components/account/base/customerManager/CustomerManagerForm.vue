<template>
<div>
  <CustomerGrid
    grid-type="grid"
    :buttonlist="buttonList"
    title="거래처관리"
    column-width="1700px"
    only-one="true"
    @row-selected="showGridData"
    @find-data="getGridData"
    @input-modal="gridInputModal"
    @regist-data="registData"
  />
</div>
</template>

<script>
import CustomerGrid from '@/components/account/base/accountGridComponent/CustomerGrid.vue'
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BFormRadioGroup, BCardText,
  BBadge, BDropdown, BDropdownItem, BPagination, BTooltip, BFormDatepicker, BInputGroup, BInputGroupAppend,
  BFormGroup,
} from 'bootstrap-vue'
import BEditableTable from 'bootstrap-vue-editable-table'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,
    BFormDatepicker,
    BInputGroup,
    BInputGroupAppend,
    BEditableTable,
    BFormRadioGroup,
    BCardText,
    BFormGroup,

    CustomerGrid
  },
  data: ()=>({
    buttonList:[
      {
        value: '조회',
        event: 'search',
      },
      {
        value: '추가',
        event: 'add',
      },
      {
        value: '삭제',
        event: 'delete',
      },
      {
        value: '저장',
        event: 'save',
      },
    ]
  }),
  created() {
    const tableColumns=[{
      tableColumns:[
        {
          key: 'customerCode', label: '거래처코드', sortable: true,
        },
        {
          key: 'workplaceCode', label: '사업장코드', sortable: true,
        } ,
        {
          key: 'customerName', label: '거래처명', sortable: true,
        },
        {
          key: 'customerCeo', label: '대표자', sortable: true,
        },
        {
          key: 'businessLicenseNumber', label: '사업자등록번호', sortable: true,
        },
        {
          key: 'customerBusinessConditions', label: '종목', sortable: true
        },
      ]
    }]

    this.$store.commit('SET_TABLE', tableColumns)

  },
}
</script>

<style>

</style>
