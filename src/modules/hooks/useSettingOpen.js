import { useEffect } from 'react';

/**
 * 채팅방의 position bottom으로 이동
 */
const useSettingOpen = () => {
  useEffect(() => () => {
    document.getElementById('scrollToElement').scrollTop = document.getElementById('scrollToElement').scrollHeight;
  });
};

export default useSettingOpen;
