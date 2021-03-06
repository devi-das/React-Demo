const initialState = [];

export default function users(state = initialState, payload) {
    switch(payload.type){
        case 'ADD_USER':
            return state.concat([payload.item]);
            break;
        case 'USER_FETCHED':
            return payload.item;
            break;
    }

    return state;
}