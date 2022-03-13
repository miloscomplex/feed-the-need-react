const initState = {
    token: "Hey gang, in this Redux tutorial I'll show you how to map your redux state to props in your React components. In other words, how to access store data from your components.",
    user: {}
}
const rootReducer = (state, action) => {
    return state;
}

const itemStore = {
    items: []
}

function itemReducer(state = itemStore, action) {
    switch (action.type) {
        case 'LOAD_ITEMS': 
            return {...state, itemsList: action.payload, loading: false }
        default: 
            return state
    }
   
}

export default rootReducer;