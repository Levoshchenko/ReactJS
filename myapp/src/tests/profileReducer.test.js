import { useReducer } from "react";
import { updateName, initialState } from "../store/profile";


describe('profileReducer test', () => {
    it('returns correct state after UPDATE_NAME action', ()=> {
        const newName = useReducer(initialState, updateName('new Name')); 

        expect(newName).toMatchSnapshot();
    });
});
