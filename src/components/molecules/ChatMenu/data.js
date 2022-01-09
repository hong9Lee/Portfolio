import { changeFontSize } from 'modules/actions/fontSize';

export const menuList = [
  {
    label: '처음으로',
    value: '처음으로',
    labelIcon: 'ri-home-8-line',
    viewStatus: '',
    onClickEvt: () => {
      window.location.reload();
    },
    error: null,
  },
  { label: '사용법', value: '사용법', labelIcon: 'ri-article-line', viewStatus: '', error: null },
  { label: '자동완성', value: '자동완성', labelIcon: 'ri-bubble-chart-line', viewStatus: '', error: null },
  {
    label: '폰트크기',
    value: '폰트크기',
    labelIcon: 'ri-font-size',
    viewStatus: '',
    onClickEvt: () => changeFontSize(15),
    error: null,
  },
];
