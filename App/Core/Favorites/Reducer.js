import {createReducer} from '../Config';
import {ADD_CONTACT_CELL, REMOVE_CONTACT_CELL} from './Types';

const initialState = {
    favoritesContactCells: [],
};

const addContactCells = (state = initialState, {payload}) => {
    const { cellToOperate } = payload;
    const isCellAdded = !!state.favoritesContactCells.find(item => item === cellToOperate)
    const newFavoritesContactCells = [...state.favoritesContactCells, cellToOperate]

    if (isCellAdded) {
        return {
            favoritesContactCells: newFavoritesContactCells
        };
    }
};

const removeContactCell = (state = initialState, {payload}) => {
    const { cellToOperate } = payload;
    const newFavoritesContactCells = []

    for (let item of state.favoritesContactCells) {
        if (cellToOperate !== item) newFavoritesContactCells.push(item)
    }

    return {
        favoritesContactCells: newFavoritesContactCells
    };
};

const descriptor = {
    [ADD_CONTACT_CELL]: addContactCells,
    [REMOVE_CONTACT_CELL]: removeContactCell,
};

export default createReducer(initialState, descriptor);
