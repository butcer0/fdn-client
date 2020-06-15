import participantsAPI from "../apis/participantsAPI";
import history from '../history';
import {
    CREATE_PARTICIPANT,
    DELETE_PARTICIPANT,
    EDIT_PARTICIPANT,
    FETCH_PARTICIPANT,
    FETCH_PARTICIPANTS
} from "./types";



export const createParticipant = formValues => async dispatch => {
    const response = await participantsAPI.post('/participants', { ...formValues});

    dispatch({type: CREATE_PARTICIPANT, payload: response.data});
    history.push('/');
};

export const fetchParticipants = () => async dispatch => {
    const response = await participantsAPI.get('/participants');

    dispatch({type: FETCH_PARTICIPANTS, payload: response.data})
};

export const fetchParticipant = id => async dispatch => {
    const response = await participantsAPI.get(`/participants/${id}`);

    dispatch({type: FETCH_PARTICIPANT, payload: response.data})
};

export const editParticipant = (id, formValues) => async dispatch => {
   const response = await participantsAPI.patch(`/participants/${id}`, formValues);

    dispatch({type: EDIT_PARTICIPANT, payload: response.data});
    history.push('/');
};

export const deleteParticipant = id => async dispatch => {
    await participantsAPI.delete(`/participants/${id}`);

    dispatch({type: DELETE_PARTICIPANT, payload: id});
    history.push('/');
};

// Reintroduce or implement elsewhere for mock implementation
// import participantsAPI, {DEFAULT_PARTICIPANT, DEFAULT_PARTICIPANTS} from "../apis/participantsAPI";
// let nextParticipantId = 0;
// export const createParticipant = formValues => async (dispatch, getState) => {
//     formValues = {id: nextParticipantId, ...formValues};
//     nextParticipantId++;
//     const response = {data: formValues};
//     dispatch({type: CREATE_PARTICIPANT, payload: response.data});
//     history.push('/');
// };
//
// export const fetchParticipants = () => async dispatch => {
//     const response = {data: DEFAULT_PARTICIPANTS};
//     dispatch({type: FETCH_PARTICIPANTS, payload: response.data})
// };
//
// export const fetchParticipant = id => async dispatch => {
//     const response = {data: DEFAULT_PARTICIPANT}
//     dispatch({type: FETCH_PARTICIPANT, payload: response.data})
// };
//
// export const editParticipant = (id, formValues) => async dispatch => {
//     formValues = {id: 0, ...formValues};
//     const response = {data: formValues};
//     dispatch({type: EDIT_PARTICIPANT, payload: response.data});
//     history.push('/');
// };
//
// export const deleteParticipant = id => async dispatch => {
//     dispatch({type: DELETE_PARTICIPANT, payload: id});
//     history.push('/');
// };
