import { createAction, handleActions } from 'redux-actions';

const POPUP_LAYER = 'popup/POPUP_LAYER';

export const LAYER = createAction(POPUP_LAYER)

const initialState = {
    status : false
};

export default handleActions(
  {
    [POPUP_LAYER]: (state, { payload: size }) => size,
  },
  initialState
);
