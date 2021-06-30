import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Task} from "../../model/Task";
import {DataHandlerService} from "../../service/data-handler.service";
import {Observable, Subscriber} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {

  @Input()
  tasks? : Task[];

  datasource: MatTableDataSource<Task> = new MatTableDataSource();
  displayedColumns = ["color", "id", "title", "category", "priority", "date", "complited"];

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  // constructor(private dataHandlerService: DataHandlerService) {
  // }

  ngOnInit(): void {

    //теперь не подписываемся на данные тут а получаем их через Imput от родительского компонента
    // this.dataHandlerService.getAllTasks()?.subscribe(value => {
    //   //this.datasource.data = value
    //   this.tasks = value
    // });

    //и не заполняем задачи тут а будем их только получать
    //  this.dataHandlerService.fillTasks()

    //связываем данные
    this.fillTable()
  }

  ngAfterViewInit(): void {
    // this.datasource.sort = this.sort!
    // this.datasource.paginator = this.paginator!
  }

  sortingFunction(task: Task, column: String) {
    switch (column) {
      case "id":
        return task.id;
      case "title":
        return task.title;
      case "date":
        return task.date ? task.date : null;
      case "category":
        return task.category ? task.category.title : null;
      case "priority":
        return task.priority ? task.priority.id : null;
    }
    return 0;
  }

  fillTable() {

    if (!this.datasource||!this.tasks){
      return;
    }


    this.datasource.data = this.tasks; // обновить источник данных (т.к. данные массива tasks обновились)
    console.log("bvv this.datasource.data = this.tasks "+this.datasource.data+", "+this.tasks)

    this.addTableObjects();

    // if (this.tasks)
    //   this.datasource.data = this.tasks

    //можно и не делать!!!
    this.datasource.sortingDataAccessor = (task, column) => {
      switch (column) {
        case "id":
          return task.id
        case "title":
          return task.title
        case "date":
          return task.date?task.date.toString():""
        case "category":
          return task.category ? task.category.title : ""
        case "priority":
          return task.priority ? task.priority.id : ""
        default :
          return ""
      }
    }
  }

  addTableObjects(){
    this.datasource.sort = this.sort!
    this.datasource.paginator = this.paginator!
  }

  onTaskCompletedClick(task: Task) {
    task.completed = !task.completed
  }

  getPriorityColor(task: Task) {
    if (task.completed || task.priority == null)
      return "#d2dae3"
    else
      return task.priority.color
  }
}


