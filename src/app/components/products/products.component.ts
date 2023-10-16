import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  showNewProductTemplate: boolean = false;
  showUpdateProductTemplate: boolean = false;
  productToUpdate:Product={
    name: '',
    price: 0,
    description: '',
    image: '',
    categoryName: ''
  };

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getAllProducts().subscribe((res: Product[]) => {
      this.products = res;
    })
  }

  addProduct(product: Product) {
    this.dataService.addNewProduct(product).subscribe((res: Product) => {
      this.showNewProductTemplate = false;
      this.getProducts();
    });
  }

  setProductToUpdate(product: Product) {
    this.productToUpdate = product;
    this.showUpdateProductTemplate = true;
  }

  updateProduct(product: Product) {
    this.dataService.updateProduct(product).subscribe((res: Product) => {
      this.showUpdateProductTemplate = false;
      this.getProducts();
    });
  }

  deleteProduct(id: number) {
    this.dataService.deleteProduct(id).subscribe((res: any) => {
      this.getProducts();
    },
      (error) => {
        console.log("Product delete Failed");
        console.log(error);
      })
  }

}
