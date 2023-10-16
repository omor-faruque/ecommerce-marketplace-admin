import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Observable<Category[]> | undefined;
  newCategory:string="";
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categories = this.dataService.getAllCategories();
  }

  deleteCategory(id:number) {
    this.dataService.deleteCategory(id).subscribe(() => {
      this.getAllCategories();
    })
  }

  addCategory() {
    if (this.newCategory.trim().length>0) {
      this.dataService.addNewCategory(this.newCategory.toLocaleUpperCase()).subscribe(() => {
        this.getAllCategories();
        this.newCategory="";
      })
    } else {
      alert("Invalid Input");
    }
  }
}
