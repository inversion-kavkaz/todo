import {Observable} from "rxjs";

export interface CommonDAO<T> {
  add(t: T): Observable<T>|undefined

  get(id: number): Observable<T|undefined>|undefined

  delete(t: T): Observable<T>|undefined

  update(t: T): Observable<T>|undefined

  getAll(): Observable<T[]>|undefined
}
