const initialState = {
backendTeam: [],
};

//stretch goal seperate root reducer
const backendReducer = (
state = initialState,
action,
) => {
switch (action.type) {
    case "RESET":
        return initialState;
        case "REMOVE_BACKEND":
            return {
                ...state,
                backendTeam: state.backendTeam.filter(student => student !== action.payload),
            };
        case "SET_BACKEND":
            return {
                ...state,
                backendTeam: [...state.backendTeam,action.payload]
        };
    default:
        return state;
    }
};
export default backendReducer
