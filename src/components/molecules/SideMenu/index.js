import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonRightText from 'components/atoms/Button/Button.rightText';
import { isACtiveSatisfyModal, disableAllMenu } from 'modules/actions/statusMenu';

const SideMenu = () => {
  const sideMenuStatus = useSelector(state => state.isActive.sideMenu);

  const dispatch = useDispatch();
  const onSatisfyModal = () => {
    if (sideMenuStatus === true) {
      dispatch(disableAllMenu());
    }
    dispatch(isACtiveSatisfyModal());
  };
  return (
    <ul className="menu_bar">
      <ButtonRightText
        label="처음으로"
        value="처음으로"
        labelIcon="ri-restart-line"
        viewStatus=""
        styleDef={{}}
        onClickEvt={() => window.location.reload()}
        error={null}
      />
      <ButtonRightText
        label="이용안내"
        value="이용안내"
        labelIcon="ri-door-lock-line"
        viewStatus=""
        styleDef={{}}
        onClickEvt={() => window.location.reload()}
        error={null}
      />
      <ButtonRightText
        label="대화 가이드"
        value="대화 가이드"
        labelIcon="ri-questionnaire-line"
        viewStatus=""
        styleDef={{}}
        onClickEvt={() => window.location.reload()}
        error={null}
      />
      <ButtonRightText
        label="서비스 만족도 평가"
        value="서비스 만족도 평가"
        labelIcon="ri-thumb-up-line"
        viewStatus=""
        styleDef={{}}
        onClickEvt={() => onSatisfyModal()}
        error={null}
      />
    </ul>
  );
};

export default SideMenu;
