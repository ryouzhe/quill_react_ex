import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import loading from './loading';
import posts, { postsSaga } from './posts';
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
    loading,
    write,
    posts,
});

export function* rootSaga() {
    yield all([writeSaga(), postsSaga()]);
}

export default rootReducer;