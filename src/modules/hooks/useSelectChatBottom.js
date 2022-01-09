import { useEffect } from 'react';

/**
 * 채팅방의 position bottom으로 이동
 */
const useSelectChatBottom = () => {
  useEffect(() => () => {
    console.log('scroll')
    document.getElementById('scrollToElement').scrollTop = document.getElementById('scrollToElement').scrollHeight;
  });
};

export default useSelectChatBottom;
