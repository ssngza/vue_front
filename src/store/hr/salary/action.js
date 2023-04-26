import {
    bonusEmp,setBonus
} from '@/api/hr/salary'


export default{

   async fetch_bonus_emp_list({ commit }){
       try{
            const response = await bonusEmp();
            commit('SET_BONUS_EMP_LIST',response)
           return true

       }catch(err){
           throw new Error(err)
            return false
       }
   },
    async set_bonus({commit},payload){
        console.log(payload);
        try{
            const{empCode,applyYearMonth,bonus,bonusName,bonusRemark,deductionAmount} = payload
            await setBonus(  {
                    empCode,applyYearMonth,bonus,bonusName,bonusRemark,deductionAmount
            });
            return true


        }catch(err){
            throw new Error(err)
            return false

        }
    },
}