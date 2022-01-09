import ButtonUnderText from 'components/atoms/Button/Button.underText';
import { autoCompleteState } from 'modules/actions/autoComplete';
import { changeFontSize } from 'modules/actions/fontSize';
import useRequestDM from 'modules/hooks/useRequestDM';
import {disableAllMenu} from 'modules/actions/statusMenu';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * 하단의 메뉴 컴포넌트
 * @returns {object} ChatMenu
 */
const ChatMenu = () => {
  const currentFontSize = useSelector(state => state.fontSize);

  const dispatch = useDispatch();

  const execOnSendMsg = text => {
    dispatch(useRequestDM(text, 'param'));
    dispatch(disableAllMenu());
  };

  return (
    <div className="_quick_div">
      <div className="_quick_menu">
        <ButtonUnderText
          label="처음으로"
          value="처음으로"
          labelIcon="ri-home-8-line"
          viewStatus=""
          styleDef={{}}
          onClickEvt={() => window.location.reload()}
          error={null}
        />
        <ButtonUnderText
          label="사용법"
          value="사용법"
          labelIcon="ri-article-line"
          viewStatus=""
          styleDef={{}}
          onClickEvt={() => execOnSendMsg('사용법')}
          error={null}
        />
        <ButtonUnderText
          label="자동완성"
          value="자동완성"
          labelIcon="ri-bubble-chart-line"
          viewStatus=""
          styleDef={{}}
          onClickEvt={() => dispatch(autoCompleteState())}
          error={null}
        />
        <ButtonUnderText
          label="폰트크기"
          value="폰트크기"
          labelIcon="ri-font-size"
          viewStatus=""
          styleDef={{}}
          onClickEvt={() => dispatch(changeFontSize(currentFontSize === 15 ? 20 : 15))}
          error={null}
        />
        <ButtonUnderText
          label="처음으로"
          value="처음으로"
          labelIcon="ri-home-8-line"
          viewStatus=""
          styleDef={{}}
          onClickEvt={() => window.location.reload()}
          error={null}
        />
        <ButtonUnderText
          label="사용법"
          value="사용법"
          labelIcon="ri-article-line"
          viewStatus=""
          styleDef={{}}
          onClickEvt={() => execOnSendMsg('사용법')}
          error={null}
        />
        <ButtonUnderText
          label="자동완성"
          value="자동완성"
          labelIcon="ri-bubble-chart-line"
          viewStatus=""
          styleDef={{}}
          onClickEvt={() => dispatch(autoCompleteState())}
          error={null}
        />
        <ButtonUnderText
          label="폰트크기"
          value="폰트크기"
          labelIcon="ri-font-size"
          viewStatus=""
          styleDef={{}}
          onClickEvt={() => dispatch(changeFontSize(currentFontSize === 15 ? 20 : 15))}
          error={null}
        />
      </div>
    </div>
  );
};

export default ChatMenu;
