const initialState = { checkedCategories: [] }

const categoriesReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case 'TOGGLE_CATEGORIE' :
            const categoryIndex = 
                state.checkedCategories.findIndex(item => item === action.value);
            if (categoryIndex !== -1) {
                nextState = {
                    ...state, 
                    checkedCategories: state.checkedCategories.filter((item, index) => index !== categoryIndex)
                }
            }
            else {
                nextState = {
                    ...state,
                    checkedCategories: [...state.checkedCategories, action.value]
                }
            }
            return nextState;
        default :
            return state;
    }
}

export default categoriesReducer;