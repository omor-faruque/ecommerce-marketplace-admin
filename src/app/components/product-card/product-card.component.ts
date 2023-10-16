import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input({ required: true }) product: any;
  @Output() deleteProductEvent = new EventEmitter<number>();
  @Output() updateProductEvent = new EventEmitter<Product>();
  showUpdateForm: boolean=false;

  emitDeleteProductEvent(id:number) {
    this.deleteProductEvent.emit(id);
  }

  emitUpdateProductEvent(product:Product) {    
    this.updateProductEvent.emit(product);
  }
  
}
