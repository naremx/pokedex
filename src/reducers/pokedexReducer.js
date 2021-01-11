import { GET_POKEDEX } from '../action/types'

export default (state = [], action) => { 
    switch (action.type) {
        case GET_POKEDEX.SUCCESS:
            return { error: false, data: action.payload, pending: false }
        case GET_POKEDEX.PENDING:
            return { error: false, data: action.payload, pending: true }
        case GET_POKEDEX.FAILURE:
            return { error: true, data: action.payload, pending: false }
        default:
            return state
    }
}
