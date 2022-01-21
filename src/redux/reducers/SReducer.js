//REDUCER INDIVIDUAL//


//Creamos el estado Inicial//
const INITIAL_STATE ={
    Result:0
};

//Creamos el reducer//
const SReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'ADD':
            {
                return{
                    ...state,
                    Result: state.Result + action.value
                }
            }

        case 'SUB':{
            return{
                ...state,
                Result:state.Result - action.value
            }
        }

        default:{
            return{
                state
            }
        }
    }
}

//Exportamos el reducer//
export default SReducer;

