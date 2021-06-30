import {Component, OnInit} from '@angular/core';
import {Task} from "./model/Task";
import {DataHandlerService} from "./service/data-handler.service";
import {Category} from "./model/Category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo';

  //Данные для компонента tasks
  tasks?: Task[];

  //Данные для компонента categories
  categories?: Category[];

  selectedCategory? : Category;


  constructor(private dataHandler: DataHandlerService) {// фасад для работы с данными
  }

  ngOnInit(): void {
    this.dataHandler.getAllCategories()?.subscribe(categories => this.categories = categories);
    //this.dataHandler.getAllTasks()?.subscribe(tasks => this.tasks = tasks);
    this.onSelectCategory(undefined)
  }

  //вызывается для получения @Output параметра дочернего компонента
  onSelectCategory(category?: Category){
    console.log("bvv 77777777777 " + category?.title)
    //this.dataHandler.getAllTasks()?.subscribe(tasks => this.tasks = tasks)
    this.dataHandler.searchTasks(category, undefined, undefined, undefined)?.subscribe(tasks => this.tasks = tasks)
  }
}
