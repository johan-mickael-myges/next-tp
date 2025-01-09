export const initialState = {
    search: "",
    type: "",
    limit: 50,
};

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return { ...state, search: action.payload };
        case "SET_TYPE":
            return { ...state, type: action.payload }; // Handle single type
        case "SET_LIMIT":
            return { ...state, limit: action.payload };
        default:
            return state;
    }
};
