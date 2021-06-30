import {TaskDao} from "../interface/TaskDao";
import {Observable, of} from "rxjs";
import {Task} from "../../../model/Task";
import {Category} from "../../../model/Category";
import {Priority} from "../../../model/Priority";
import {TestData} from "../../TestData";

export class TaskDAOArray implements TaskDao{
  add(t: Task): Observable<Task> | undefined {
    return undefined;
  }

  delete(t: Task): Observable<Task> | undefined {
    return undefined;
  }

  get(id: number): Observable<Task|undefined> | undefined {
    return of(TestData.tasks.find(task => task.id==id))
  }

  getAll(): Observable<Task[]> | undefined {
    return of(TestData.tasks);
  }

  getCompletedCountInCategory(category: Category): Observable<number> | undefined {
    return undefined;
  }

  getTotalCount(): Observable<number> | undefined {
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> | undefined {
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> | undefined {
    return undefined;
  }

  search(category?: Category, searchText?: string, status?: boolean, priority?: Priority): Observable<Task[]> | undefined {

    let allTasks = TestData.tasks;

    if (category != null) {
      //allTasks = allTasks.filter(todo => todo.category === category);
      allTasks = TestData.tasks.slice(0,3)
    }

    console.log("bvv allTasks.length="+allTasks.length)

    return of(allTasks); // отфильтрованный массив
    // if(category!=null){
    //   return of(TestData.tasks.filter(task => task.category?.id==category.id))
    // }else {
    //   return of(TestData.tasks)
    // }
    // return undefined;
  }

  update(t: Task): Observable<Task> | undefined {
    return undefined;
  }

  // getTasksByCategory(category: Category) : Observable<Task[]>{
  //   return of(TestData.tasks.filter(task => task.category===category))
  // }
}
