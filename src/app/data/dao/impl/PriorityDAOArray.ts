import {PriorityDAO} from "../interface/PriorityDAO";
import {Priority} from "../../../model/Priority";
import {Observable} from "rxjs";

export class PriorityDAOArray implements PriorityDAO{
  add(t: Priority): Observable<Priority> | undefined {
    return undefined;
  }

  delete(t: Priority): Observable<Priority> | undefined {
    return undefined;
  }

  get(id: number): Observable<Priority | undefined> | undefined {
    return undefined;
  }

  getAll(): Observable<Priority[]> | undefined {
    return undefined;
  }

  update(t: Priority): Observable<Priority> | undefined {
    return undefined;
  }

}
