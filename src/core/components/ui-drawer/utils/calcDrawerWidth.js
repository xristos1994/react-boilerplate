import { isMobile } from '@core/utils/helpers';

const calcDrawerWidth = () =>
  isMobile() && window.innerWidth < 768
    ? '100vw'
    : window.innerWidth < 768
    ? '100vw'
    : '270px';

export default calcDrawerWidth;
