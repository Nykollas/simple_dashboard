import {SET_MODE } from './actions';

const initialState = {
    dark:false
}

const reducer =(state= initialState, action) => {
    
    switch(action.type){
        case SET_MODE:
            
            return Object.assign({}, state, {
                dark:action.dark
            });
            
            

        default:
            return state;
    }
}

export default reducer;