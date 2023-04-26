import { hrApi } from '@/api'

//Api
const BONUS_URL = 'salary/finderBonus'
const set_bonus_url = 'salary/updateBonus'

//보너스 전체조회
function bonusEmp(){
    return hrApi.get(`${BONUS_URL}`)
}

function setBonus(params){
    return hrApi.post(`${set_bonus_url}`,params)
}

export {
    bonusEmp,setBonus
}
