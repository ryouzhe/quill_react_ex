import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as postsAPI from '../lib/api/posts';

const [SAVE_IMG, SAVE_IMG_SUCCESS, SAVE_IMG_FAILURE] = createRequestActionTypes('image/SAVE_IMG');

export const saveimg = createAction(SAVE_IMG, ({ formData }) => ({ formData }));

const saveImgSaga = createRequestSaga(SAVE_IMG, postsAPI.saveimg);

export function* saveImageSaga() {
    yield takeLatest(SAVE_IMG, saveImgSaga);
}

const initialState = {
    imgPath: '',
};

const image = handleActions({
    [SAVE_IMG_SUCCESS]: (state, { payload: data }) => ({
        ...state,
        imgPath: data,
    }),
    [SAVE_IMG_FAILURE]: (state, { payload: error }) => ({
        ...state,
        checkError: error,
    }),
}, initialState);

export default image;