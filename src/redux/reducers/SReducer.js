//REDUCER INDIVIDUAL//


//Creamos el estado Inicial//
const INITIAL_STATE = {
    Result:0
};

//Creamos el reducer//
const SReducer = (state = INITIAL_STATE, {type, value})=>{
	
    switch(type){
        case 'ADD':
                return {
                    ...state,
                    Result: state.Result + value
                }

        case 'SUB':
            return {
                ...state,
                Result:state.Result - value
            }
    

        default:
            return state;

    }
}

//Exportamos el reducer//
export default SReducer;
