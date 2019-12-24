import { ActionsObservable } from 'redux-observable';
import { requestTestAction } from './../actions';
import { requestTestEpic } from './../epics';

describe('Epics Test1', () => {
  it('openModalEpic1', async () => {
    const action$ = ActionsObservable.of(requestTestAction());

    const epic$ = requestTestEpic(action$);

    return epic$.toPromise().then(actionReceived => {
      expect(actionReceived.type).toBe(requestTestAction.succeeded.type);
    });
  });
});
