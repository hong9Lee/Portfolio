import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import chatList, { getChatListSaga } from 'modules/actions/chat';
import fontSize from 'modules/actions/fontSize';
import autoComplete, { autoCompleteSaga } from 'modules/actions/autoComplete/index';
import isActive from 'modules/actions/statusMenu/index';
import popUp from 'modules/actions/popup/index';

const rootReducer = combineReducers({
  autoComplete,
  isActive,
  chatList,
  fontSize,
  popUp
});

export function* rootSaga() {
  yield all([autoCompleteSaga(), getChatListSaga()]);
}

export default rootReducer;
