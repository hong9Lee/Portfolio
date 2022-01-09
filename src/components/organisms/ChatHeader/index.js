import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/atoms/Button/IconButton';
import LeftSettingMenu from 'components/molecules/LeftSettingMenu';
import SideMenu from 'components/molecules/SideMenu';
import { isActiveSettingMenu, isActiveSideMenu, disableAllMenu } from 'modules/actions/statusMenu';
import { useDispatch, useSelector } from 'react-redux';
/**
 * Chatting:Header
 */
const ChatHeader = ({ title, viewType }) => {
  const settingMenuStatus = useSelector(state => state.isActive.settingMenu);
  const sideMenuStatus = useSelector(state => state.isActive.sideMenu);

  const dispatch = useDispatch();

  // 채팅창 닫기
  const eventClickBackMain = () => {
    console.log(5555);
  };

  /* 셋팅매뉴 클릭시 다른 메뉴창 닫힘 */
  const onSettingMenu = () => {
    if (sideMenuStatus === true) {
      dispatch(disableAllMenu());
    }
    dispatch(isActiveSettingMenu());
  };

  /* 사이드메뉴 클릭시 다른 메뉴창 닫힘 */
  const onSideMenu = () => {
    if (settingMenuStatus === true) {
      dispatch(disableAllMenu());
    }
    dispatch(isActiveSideMenu());
  };
  return (
    <header className="_chat_header" style={{ zIndex: settingMenuStatus || sideMenuStatus ? 3 : 2 }}>
      <div className="_left_div">
        <IconButton
          icon="ri-settings-3-line"
          styleDef={{
            borderRadius: '0px',
            color: '#37B7FF',
            transform: settingMenuStatus ? 'rotate(90deg)' : 'rotate(0deg)',
            opacity: settingMenuStatus ? '1' : '0.5',
            transition: settingMenuStatus ? '0.5s' : '0s',
          }}
          viewStatus=""
          clickEvt={onSettingMenu}
        />
      </div>
      <div className="_center_div">
        <div className="_logo">
          <img src="/images/chatman.svg" alt="logo" />
        </div>
        <div className="_title">
          <p>TeAna Talk</p>
        </div>
      </div>
      <div className="_right_div">
        <IconButton icon="ri-menu-fill" styleDef={{ borderRadius: '0px', color: '#37B7FF' }} viewStatus="" clickEvt={onSideMenu} />
      </div>

      <div className="setting" style={{ display: settingMenuStatus || sideMenuStatus ? 'block' : 'none' }}>
        {settingMenuStatus && <LeftSettingMenu />}
        {sideMenuStatus && <SideMenu />}
      </div>

    </header>
  );
};

ChatHeader.propTypes = {
  title: PropTypes.string,
  viewType: PropTypes.string,
};
ChatHeader.defaultProps = {
  title: '',
  viewType: '',
};
export default ChatHeader;
