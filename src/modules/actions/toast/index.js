import { createAction, handleActions } from 'redux-actions';
import { put, takeLeading, delay } from 'redux-saga/effects'

export const PUSH_TOASTER_TO_QUEUE = 'PUSH_TOASTER_TO_QUEUE';
export const SHIFT_TOASTER_FROM_QUEUE = 'SHIFT_TOASTER_FROM_QUEUE';
export const SHOW_TOASTER = 'SHOW_TOASTER'
export const HIDE_TOASTER = 'HIDE_TOASTER'

const ACTIVE_TOAST_BOX = 'toast/ACTIVE_TOAST_BOX'
export const activeToast = createAction(ACTIVE_TOAST_BOX);
export const CreateToast = createAction(SHOW_TOASTER);

const initialState = {
    active : false
}

export function* showToastSaga() {
    yield takeLeading(SHOW_TOASTER, toastQueue)
}

export function* toastQueue(action){
    console.log("!!!!!!!!!", action)

    const toastState = {
        title : action.payload.title,
        contents : action.payload.contents
    }

    yield put({
        type: SHOW_TOASTER,
        toast : toastState,
        active:true
    })

    yield delay(1000)

    yield put({
        type: HIDE_TOASTER,
        active:false
    })
}

const isToast = handleActions({
        // [ACTIVE_TOAST_BOX] : (state, { payload: onclick}) => onclick
        [SHOW_TOASTER] : (state, action) => ({...state, active: !state.active, msg : action.toast}),
        [HIDE_TOASTER] : (state, action) => ({...state, active: !state.active}),

    },
    initialState
);

export default isToast;
