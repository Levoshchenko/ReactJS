import { TOGGLE_NAME, UPDATE_NAME } from "./action"

const initialState = {
    showName: true,
    name: 'Кристина'
};

const profileReducer =( state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAME:
            return {
                ...state,
                showName: !state.showName
            };

            case UPDATE_NAME:
                return{
                    ...state,
                    name: action.payload
                }
            
        default:
            return state;
    }
};

export default profileReducer;