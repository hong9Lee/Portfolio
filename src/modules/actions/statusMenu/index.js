import { createAction, handleActions } from 'redux-actions';

const ACTIVE_SETTING_MENU = 'statusmenu/ACTIVE_SETTING_MENU';
const ACTIVE_SIDE_MENU = 'statusmenu/ACTIVE_SIDE_MENU';
const ACTIVE_QUICK_MENU = 'statusmenu/ACTIVE_QUICK_MENU';
const ACTIVE_FEEDBACK_MODAL= 'statusmenu/ACTIVE_FEEDBACK_MODAL';
const ACTIVE_SATISFY_MODAL = 'statusmenu/ACTIVE_SATISFY_MODAL';
const DISABLE_ALL_MENU = 'statusmenu/DISABLE_ALL_MENU';


export const isActiveSettingMenu = createAction(ACTIVE_SETTING_MENU);
export const isActiveSideMenu = createAction(ACTIVE_SIDE_MENU);
export const isActiveQuickMenu = createAction(ACTIVE_QUICK_MENU);
export const isACtiveFeedbackModal = createAction(ACTIVE_FEEDBACK_MODAL);
export const isACtiveSatisfyModal = createAction(ACTIVE_SATISFY_MODAL);

export const disableAllMenu = createAction(DISABLE_ALL_MENU);
// const initialState = false;
const initialState = {
  settingMenu:false,
  sideMenu:false,
  quickMenu:false,
  feedbackModal:false,
  satisfyModal:false,
};

const isActive = handleActions(
  {
    [ACTIVE_SETTING_MENU]: state => ({...state , settingMenu: !state.settingMenu}),
    [ACTIVE_SIDE_MENU]: state => ({...state , sideMenu: !state.sideMenu}),
    [ACTIVE_QUICK_MENU]: state => ({...state , quickMenu: !state.quickMenu}),
    [ACTIVE_FEEDBACK_MODAL]: state => ({...state , feedbackModal: !state.feedbackModal}),
    [ACTIVE_SATISFY_MODAL]: state => ({...state , satisfyModal: !state.satisfyModal}),
    [DISABLE_ALL_MENU]: state => initialState
  },
  initialState
);

export default isActive;
