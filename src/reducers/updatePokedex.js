import { PUT_POKEDEX } from '../action/types'

export default (state = [], action) => {
    switch (action.type) {
        case PUT_POKEDEX.SUCCESS:
            return { error: false, data: action.payload, pending: false }
        case PUT_POKEDEX.PENDING:
            return { error: false, data: action.payload, pending: true }
        case PUT_POKEDEX.FAILURE:
            return { error: true, data: action.payload, pending: false }
        default:
            return state
    }
}
