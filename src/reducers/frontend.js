    const initialState = {
    frontendTeam: []
    };

    //stretch goal seperate root reducer
    const frontendReducer = (
    state = initialState,
    action,
    ) => {
    switch (action.type) {
        case "REMOVE_FRONTEND":
            return {
                ...state,
                frontendTeam: state.frontendTeam.filter(student => student !== action.payload),
            };
        case "SET_FRONTEND":
            return {
                ...state,
                frontendTeam: [...state.frontendTeam,action.payload]
        };
    case "RESET":
        return initialState;

    default:
        return state;
    }
    };
    export default frontendReducer;
