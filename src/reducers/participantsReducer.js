import _ from 'lodash';

import {
    CREATE_PARTICIPANT,
    DELETE_PARTICIPANT,
    EDIT_PARTICIPANT,
    FETCH_PARTICIPANT,
    FETCH_PARTICIPANTS
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PARTICIPANTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_PARTICIPANT:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_PARTICIPANT:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_PARTICIPANT:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_PARTICIPANT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
