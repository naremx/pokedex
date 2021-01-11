import { combineReducers } from 'redux';
import pokedex from './pokedexReducer';
import updatePokedex from './updatePokedex';

const rootReducer = combineReducers({
    pokedex,
    updatePokedex,
})

export default rootReducer