export function AppState(state, action) {

    switch(action.type) {
        case 'ADD':
            state.users = state.users.concat([{
                name: action.payload.name,
                email: ''
            }]);
            break;
    }

    return state;
}