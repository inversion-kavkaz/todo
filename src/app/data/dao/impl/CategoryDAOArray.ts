import {CategoryDAO} from "../interface/CategoryDAO";
import {Category} from "../../../model/Category";
import {Observable, of} from "rxjs";
import {TestData} from "../../TestData";

export class CategoryDAOArray implements CategoryDAO{
  add(t: Category): Observable<Category> | undefined {
    return undefined;
  }

  delete(t: Category): Observable<Category> | undefined {
    return undefined;
  }

  get(id: number): Observable<Category | undefined> | undefined {
    return undefined;
  }

  getAll(): Observable<Category[]> | undefined {
    return of(TestData.categories)
  }

  search(title: String): Observable<Category[]> | undefined {
    return undefined;
  }

  update(t: Category): Observable<Category> | undefined {
    return undefined;
  }


}
