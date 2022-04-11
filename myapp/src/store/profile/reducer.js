import { TOGGLE_NAME } from "./action"

const initialState = {
    showName: false,
    name: 'Кристина'
};

const profileReducer =( state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAME:
            return {
                ...state,
                showName: !state.showName
            };
            
        default:
            return state;
    }
};

export default profileReducer;