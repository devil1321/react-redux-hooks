import { DEPOSIT, WIRHDRAW } from '../action-types'
const initState = {
    account: 0
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case DEPOSIT:
            return {
                ...state,
                account: state.account + action.payload
            }
        case WIRHDRAW:
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