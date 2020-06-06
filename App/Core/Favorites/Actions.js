import {ADD_CONTACT_CELL, REMOVE_CONTACT_CELL} from './Types';

export const addContactCells = (cellToOperate) => async dispatch => dispatch({
    type: ADD_CONTACT_CELL,
    payload: {
        cellToOperate
    }
})

export const removeContactCell = (cellToOperate) => async dispatch => dispatch({
    type: REMOVE_CONTACT_CELL,
    payload: {
        cellToOperate
    }
})
