import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import participantsReducer from "./participantsReducer";

export default combineReducers({
    participants: participantsReducer
    // ,form: formReducer
});
