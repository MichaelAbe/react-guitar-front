const initialState = {
    guitars: [],
    loading: true 
}

const guitarsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_GUITARS":
            return {
                ...state,
                loading: false,
                guitars: action.guitars
            }
        default:
            return state
    }
}

export default guitarsReducer