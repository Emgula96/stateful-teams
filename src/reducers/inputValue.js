const initialState = {
    inputValue: "",
};

const inputReducer = (
    state = initialState,
    action,
    ) => { 
    switch (action.type) {
        case "RESET":
            return initialState;
        case "SET_INPUT":
            return { ...state, inputValue: action.payload }
        default:
            return state;
    }
}
    export default inputReducer