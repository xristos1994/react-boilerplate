import { coreUi_openModalAction, coreUi_updateModalState } from './../actions';
import { ActionsObservable } from 'redux-observable';
import { coreUi_openModalEpic } from './../epics';

describe('Epics Test1', () => {
  it('should dispatch a JWT token when authenticating is successful', async () => {
    const action$ = ActionsObservable.of(
      coreUi_openModalAction({ show: true }),
    );

    const epic$ = coreUi_openModalEpic(action$);

    return epic$.toPromise().then(actionReceived => {
      expect(actionReceived.type).toBe(coreUi_updateModalState.type);
      expect(actionReceived.payload).toEqual({
        message: 'Undefined Message',
        show: true,
        title: 'Undefined Modal Title',
      });
    });
  });
});
