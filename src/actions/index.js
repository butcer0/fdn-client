import {DEFAULT_PARTICIPANT, DEFAULT_PARTICIPANTS} from "../apis/participantsAPI";
import history from '../history';
import {
    CREATE_PARTICIPANT,
    DELETE_PARTICIPANT,
    EDIT_PARTICIPANT,
    FETCH_PARTICIPANT,
    FETCH_PARTICIPANTS
} from "./types";

let nextParticipantId = 0;

export const createParticipant = formValues => async (dispatch, getState) => {
    formValues = {id: nextParticipantId, ...formValues};
    nextParticipantId++;
    const response = {data: formValues};
    dispatch({type: CREATE_PARTICIPANT, payload: response.data});
    history.push('/');
};

export const fetchParticipants = () => async dispatch => {
    const response = {data: DEFAULT_PARTICIPANTS};
    dispatch({type: FETCH_PARTICIPANTS, payload: response.data})
};

export const fetchParticipant = id => async dispatch => {
    const response = {data: DEFAULT_PARTICIPANT}
    dispatch({type: FETCH_PARTICIPANT, payload: response.data})
};

export const editParticipant = (id, formValues) => async dispatch => {
    formValues = {id: 0, ...formValues};
    const response = {data: formValues};
    dispatch({type: EDIT_PARTICIPANT, payload: response.data});
    history.push('/');
};

export const deleteParticipant = id => async dispatch => {
    dispatch({type: DELETE_PARTICIPANT, payload: id});
    history.push('/');
};
