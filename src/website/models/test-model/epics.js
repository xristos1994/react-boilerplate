import { combineEpics, ofType } from "redux-observable";
import { map, mergeMap, tap, repeat, takeUntil, catchError, take, debounceTime, buffer, bufferCount, bufferTime  } from "rxjs/operators";
import { zip, throwError, of, timer, empty, combineLatest, concat, interval, range, forkJoin, race } from "rxjs";
import { pushAction as push } from "@core/models/router";
import { coreUi_openLoaderAction, coreUi_closeLoaderAction } from "@core/models/core-ui"
import { noAction } from "@core/models/general"
import { request } from "@core/operators";
import {
  testAction,
  requestTestAction,
  zipAction_1,
  zipAction_2,
  action1,
  action2,
  abort_zip
} from "./actions";
import * as services from "services";

const epic = (action$, state$) => {
  return action$.pipe(
    ofType(testAction.type),
    mergeMap(({ payload }) => [
      testAction.succeeded({ test: payload.test + 1 }),
      push("/route1")
    ])
  );
};

const requestTestEpic = (action$, state$) => {
  return action$.pipe(
    ofType(requestTestAction.type),
    request(requestTestAction, services.testService)
    //mergeMap(() => [requestTestAction.succeeded({ value: 0 })])
  );
};

const requestTestShowLoaderEpic = (action$, state$) => {
  return action$.pipe(
    ofType(requestTestAction.type),
    map(() => coreUi_openLoaderAction())
  );
};

const requestResponseEpic = (action$, state$) => {
  return action$.pipe(
    ofType(requestTestAction.succeeded.type, requestTestAction.failed.type),
    map(() => coreUi_closeLoaderAction())
  );
};

const zipEpic_1 = (action$, state$) => {
  return action$.pipe(
    ofType(zipAction_1.type),
    request(zipAction_1, services.testService)
  );
};

const zipEpic_2 = (action$, state$) => {
  return action$.pipe(
    ofType(zipAction_2.type),
    request(zipAction_2, services.testService1)
  );
};

const zipNetworkEpic = (action$, state$) => {
  const stream1$ = action$.pipe(ofType(zipAction_1.succeeded.type));
  const stream2$ = action$.pipe(ofType(zipAction_2.succeeded.type));
  const zipped$ = zip(stream1$, stream2$);

  return zipped$.pipe(
    tap(([stream1, stream2]) => {
      console.log("Network Zip Result");
      console.log([stream1.payload, stream2.payload]);
    }),
    map(payload => {
      return noAction('zipNetworkEpic')
    }),
    repeat()
  );
};

const zip_Epic = (action$, state$) => {
  const stream1$ = action$.pipe(ofType(action1.type));
  const stream2$ = action$.pipe(ofType(action2.type));
  const zipped$ = zip(stream1$, stream2$);

  return zipped$.pipe(
    takeUntil(action$.ofType(abort_zip.type)),
    tap(([stream1, stream2]) => {
      console.log("Zip Result");
      console.log([stream1.payload, stream2.payload]);
    }),
    //map(([stream1, stream2]) => {
    mergeMap(payload => {
      //return noAction('zip_Epic')
      return timer(3000, 1000).pipe(
        tap((payload) => console.log('timer:' + payload)),
        take(4),
        mergeMap(() => empty())
      )
    }),
    //repeat() // Με το repeat "ξεχνάει" ότι έχει έρθει abort
  );
};

const throwError_Epic = (action$, state$) => {
  return action$.pipe(
    ofType(action1.type),
    mergeMap(({payload}) => payload === 2 ? throwError('Twos are bad') : of(noAction('throwError_Epic')) ) ,
    catchError((err, caught) => {console.log('Error thrown and caught'); return caught;})
  );
};

const combineLatest_Epic = (action$, state$) => {
  const stream1$ = action$.pipe(ofType(action1.type),take(2));
  const stream2$ = action$.pipe(ofType(action2.type),(take(3)));
  const combinedLatest = combineLatest(stream1$, stream2$);

  return combinedLatest.pipe(
    tap(([stream1, stream2]) => {
      console.log("combineLatest Result");
      console.log([stream1.payload, stream2.payload]);
    }),
    mergeMap(() => empty()),
    repeat() // Όταν τρέξουν από 2 και 3 φορές αντίστοιχα μηδενίζει το μέτρημα
  );
};

const trippleZip_Epic = (action$, state$) => {
  const stream1$ = action$.pipe(ofType(action1.type), debounceTime(2000) );
  const stream2$ = action$.pipe(ofType(action2.type));
  const zipped$ = zip(stream1$, stream2$);
  const timer$ = interval(5000).pipe(take(5));
  const trippleZipped$ = zip(zipped$, timer$);

  return trippleZipped$.pipe(
    tap(([zipped, timer]) => {
      console.log("TrippleZip Result");
      console.log([zipped[0].payload, zipped[1].payload, timer]);
    }),
    //map(([stream1, stream2]) => {
    mergeMap(payload => empty()),
  );
};

const concat_Epic = (action$, state$) => {
  const stream2$ = range(1, 10).pipe(map(x=>x+10));
  const stream1$ = action$.pipe(ofType(action1.type),take(2));
  const concated$ = concat(stream1$, stream2$);

  return concated$.pipe(
    tap((payload) => {
      console.log("Concat Result");
      console.log(payload.payload === undefined ? payload : payload.payload);
    }),
    mergeMap(() => empty()),
    repeat()// Αρχιζει απο την αρχη το μέτρημα μέχρι το take(2).
  );
};

const forkJoin_Epic = (action$, state$) => {
  const stream1$ = action$.pipe(ofType(action1.type),take(1));
  const stream2$ = action$.pipe(ofType(action2.type),take(3));
  const forkJoined$ = forkJoin(stream1$, stream2$);

  return forkJoined$.pipe(
    tap(([action1, action2]) => {
      console.log("Forkjoin Result");
      console.log([action1.payload, action2.payload]);
    }),
    mergeMap(payload => empty()),
    repeat()// Όταν εκτελεστούν από 1 και 3 φορ΄΄΄ές αντίστοιχα, μηδενίζει το μέτρημα.
  );
};

const race_Epic = (action$, state$) => {
  const stream1$ = action$.pipe(ofType(action1.type),take(3));
  const stream2$ = action$.pipe(ofType(action2.type),take(3));
  const raced$ = race(stream1$, stream2$);

  return raced$.pipe(
    tap(({type, payload}) => {
      console.log("Race Result");
      console.log(type + " action dispatched first with payload " + payload);
    }),
    mergeMap(payload => empty()),
    repeat()// Όταν ένα από τα δύο τρέξει 3 φορές τότε ο αγώνας ξεκινά από την αρχή.
  );
};

const buffer_Epic = (action$, state$) => {
  const stream1$ = action$.pipe(ofType(action1.type));
  const stream2$ = action$.pipe(ofType(action2.type));

  const buffered$ = stream1$.pipe(buffer(stream2$));

  return buffered$.pipe(
    tap((payload) => {
      console.log("Buffer Result");
      console.log(payload);
    }),
    mergeMap(payload => empty())
  );
};

const bufferCount_Epic = (action$, state$) => {
  const stream1$ = action$.pipe(ofType(action1.type));

  //Κάθε δύο φορές επιστρέφει τα 4 προηγούμενα. εκτός από την πρώτη φορά που δεν υπάρχουν 4 προηγούμενα και δεν επιστρέφει τίποτα
  const bufferCounted$ = stream1$.pipe(bufferCount(4,2));

  return bufferCounted$.pipe(
    tap((payload) => {
      console.log("BufferCount Result");
      console.log(payload);
    }),
    mergeMap(payload => empty())
  );
};

const bufferTime_Epic = (action$, state$) => {
  const stream2$ = action$.pipe(ofType(action2.type));

  // Κάθε 2 δευτερόλεπτα επιστρέφει τα actions2 που εκτελέστηκαν μέσα σε αυτά τα 2 δευτερόλεπτα
  const bufferTimed$ = stream2$.pipe(bufferTime(2000),take(3));

  return bufferTimed$.pipe(
    tap((payload) => {
      console.log("BufferTime Result");
      console.log(payload);
    }),
    mergeMap(payload => empty())
  );
};


export const testEpic = combineEpics(
  epic,
  requestTestEpic,
  zipEpic_1,
  zipEpic_2,
  zipNetworkEpic,
  zip_Epic,
  throwError_Epic,
  combineLatest_Epic,
  trippleZip_Epic,
  concat_Epic,
  forkJoin_Epic,
  race_Epic,
  buffer_Epic,
  bufferCount_Epic,
  bufferTime_Epic,
  requestTestShowLoaderEpic,
  requestResponseEpic
);
