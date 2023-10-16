import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output() productEvent = new EventEmitter<Product>();
  @Output() cancelEvent = new EventEmitter<boolean>();
  @Input() pageHeader: string = "";
  errorInInput: boolean = false;
  categoryOptions: Category[] = [];

  @Input() product: Product = {
    name: '',
    price: 0,
    description: '',
    image: '',
    categoryName: ''
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this, this.getAllCategories();
  }

  onSubmit() {
    if (this.validateInput()) {
      this.errorInInput = false;
      this.productEvent.emit(this.product);

    } else {
      this.errorInInput = true;
    }
  }

  cancelClicked() {
    this.cancelEvent.emit(true);
  }
  private isProductPriceValid(input: any) {
    return typeof input === 'number' && input > 0;
  }

  private getAllCategories() {
    this.dataService.getAllCategories().subscribe((res: Category[]) => {
      this.categoryOptions = res;
    })
  }

  private validateInput(): boolean {
    return this.product.name.trim().length > 0 && this.product.categoryName.trim().length > 0 && this.isProductPriceValid(this.product.price)
  }

}
