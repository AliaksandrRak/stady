
import{ SET_SELECTED_DIRECTION} from './mainAction'

const initialState = {
    date:{}
}

export const mainReduser = (state = initialState, action)=>{
    switch (action.type){
        case SET_SELECTED_DIRECTION:{
            let newState={...state};
            newState.selectedDirection=action.directionId;
            return newState;
        }
       
        default: return state;
    }
    
}