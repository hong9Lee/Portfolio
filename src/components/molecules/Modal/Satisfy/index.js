import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import BasicLayout from 'components/atoms/Modal/Basic.Layout';
import IconButton from 'components/atoms/Button/IconButton';

const Satisfy = () => {
  const dispatch = useDispatch();
  return (
    <BasicLayout
      label="처음으로"
      value="처음으로"
      labelIcon="ri-restart-line"
      viewStatus=""
      styleDef={{ height: '372px' }}
      onClickEvt={() => window.location.reload()}
      error={null}
    >
      ㄴㅁㅇㅁㄴㅇㅁㄴㅇ
      <IconButton icon="ri-close-line" styleDef={{ backgroundColor: '#fff', color: '#2C3134', fontSize: '26px', marginTop: '4px' }} viewStatus="" />
    </BasicLayout>
  );
};

export default Satisfy;
