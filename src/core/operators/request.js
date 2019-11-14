import { ajax } from "rxjs/ajax";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

const request = (responseAction, service) =>
  mergeMap(action =>
    ajax(service).pipe(
      map(response => {
        return responseAction.succeeded(response);
      }),
      catchError(error => {
        return of(responseAction.failed(error));
      })
    )
  );

export default request;
