import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { map, Observable, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyServiceService implements PreloadingStrategy{

  constructor() { }
  preload(route: Route, fn: () => Observable<any>): Observable<any> {

  //  normal pre loading without any delay , please remove loadAfterSeconds: 5 from this route in routing file
  //   if (route.data && route.data['preload']) {
  //     return fn();
  //   }
  //   return of(null);
  // }


    const loadRoute = (delay:any) => delay > 0 ? timer(delay*1000).pipe(map(() => fn())) : fn();
    if (route.data && route.data['preload']) {
      const delay = route.data['loadAfterSeconds'] ? route.data['loadAfterSeconds'] : 0;
      return loadRoute(delay);
    }
    return of(null);
  }
}
