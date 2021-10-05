const initState = {
    account: 0
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'deposit':
            return {
                ...state,
                account: state.account + action.payload
            }
        case 'withdraw':
            return {
                ...state,
                account: state.account - action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer