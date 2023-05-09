export default{

    SET_BONUS_EMP_LIST(state,response){

        state.empBonus = response.data.empBonus
        console.log(response.data)
    }
}