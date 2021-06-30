import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import {Observable, of, Subject} from "rxjs";
import {TaskDao} from "../data/dao/interface/TaskDao";
import {TaskDAOArray} from "../data/dao/impl/TaskDAOArray";
import {CategoryDAOArray} from "../data/dao/impl/CategoryDAOArray";
import {Priority} from "../model/Priority";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  //taskSubject = new Subject<Task[]>();
  //categoriesSubject = new Subject<Category[]>()
  taskDAOArray = new TaskDAOArray()
  categoryDAOArray = new CategoryDAOArray()

  fillCategories() {
    //this.categoriesSubject.next(TestData.categories)
  }

  fillTasks() {
    //this.taskSubject.next(TestData.tasks)
  }

  fillTasksByCategory(category: Category) {

    //this.taskSubject.next(TestData.tasks.filter(task => task.category === category))
  }

  getAllTasks() : Observable<Task[]>|undefined{
    return this.taskDAOArray.getAll()
  }

  getAllCategories() : Observable<Category[]>|undefined{
    return this.categoryDAOArray.getAll()
  }

  searchTasks(category? : Category, searchText? : string, status? : boolean, priority? : Priority) : Observable<Task[]>|undefined{
    return this.taskDAOArray.search(category, searchText, status, priority)
  }

  // getTasksByCategory(category : Category) : Observable<Task[]>{
  //    return this.taskDAOArray.getTasksByCategory(category)
  // }
}
