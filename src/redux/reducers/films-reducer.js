 const initialState = 
{ 
    films: []
}

const filmsReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type)
    {
        case 'FILMS_RECEIVED':
            nextState = { ...state, films: action.value}
            return nextState;
        case 'DELETE':
            nextState = {
                ...state,
                films: state.films.filter((item) => item.id !== action.value.id)
            }
            return nextState;
        default:
            return state;
    }
}

export default filmsReducer;