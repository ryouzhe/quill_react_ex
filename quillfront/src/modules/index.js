import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import loading from './loading';
import posts, { postsSaga } from './posts';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
    loading,
    write,
    posts,
    post,
});

export function* rootSaga() {
    yield all([writeSaga(), postsSaga(), postSaga()]);
}

export default rootReducer;