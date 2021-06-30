import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  //принимает значение <- от родительского компонента
  @Input() categories?: Category[];

  selectedCategory?: Category;

  // отдает значение -> родительскому компоненту
  @Output() selectCategoryEvent = new EventEmitter<Category>();

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit(): void {
    // this.dataHandlerService.categoriesSubject.subscribe((value => this.categories = value))

    //теперь занные получаем через Input параметр от родительского компонента
    //this.dataHandlerService.getAllCategories()?.subscribe((value => this.categories = value))

    //this.dataHandlerService.fillCategories()
  }

  showTasksByCategory(category: Category) {
    // теперь заполнять задачи будет родительский компонент и далее передавать их в дочерний через @Input
    // this.dataHandlerService.fillTasksByCategory(category)

    // если не изменилось значение, ничего не делать (чтобы лишний раз не делать запрос данных)
    if (this.selectedCategory === category) {
      return;
    }

    this.selectedCategory = category; // сохраняем выбранную категорию

    // вызываем внешний обработчик и передаем туда выбранную категорию
    this.selectCategoryEvent.emit(this.selectedCategory);
  }
}
