/* eslint-disable import/prefer-default-export*/

import {hrApi} from '@/api'

const getEmpList = '/affair/empList'
const getDeptList = '/base/deptList'
const getselectedemp = '/affair/empList/selected'

/**
 * 직원조회
 * @returns {*}
 */
function getAllEmpList() {
  return hrApi.get(`${getEmpList}`)
}


function getAllDepartmentList() {
    return hrApi.get(`${getDeptList}`)
}


function getEmpDetail(clickEmp) {
  console.log(clickEmp)
  return hrApi.get(`${getselectedemp}`, {
                  params:{
                   empCode : clickEmp,
                  },
  })
}




export {
  getAllEmpList,getEmpDetail,getAllDepartmentList
}
