import { nullOrUndefinedToValue as nvl } from '@core/utils/helpers';

const createSnackbarState = payload => ({
  message: nvl(payload.message, 'Undefined Application Message'),
  type: nvl(payload.type, 'info'),
  position: nvl(payload.position, 'bottomRight'),
});

const createModalState = payload => ({
  title: nvl(payload.title, 'Undefined Modal Title'),
  message: nvl(payload.message, 'Undefined Message'),
});

export { createSnackbarState, createModalState };
