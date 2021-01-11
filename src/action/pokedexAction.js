import { GET_POKEDEX, PUT_POKEDEX } from './types'
import api from '../api/pokedexApi'

export const getPokedex = () => {
    return dispatch => {
        dispatch({ type: GET_POKEDEX.PENDING, payload: [] })
        api.get("/api/cards")
            .then((res) => {
                dispatch({ type: GET_POKEDEX.SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: GET_POKEDEX.FAILURE, payload: err })
            })
    }
}

export const updatePokedex = (data) => {
    return dispatch => {
        dispatch({ type: PUT_POKEDEX.PENDING, payload: [] })
        if (data) {
            dispatch({ type: PUT_POKEDEX.SUCCESS, payload: data })
        }
        else {
            dispatch({ type: PUT_POKEDEX.FAILURE })
        }
    }
}

