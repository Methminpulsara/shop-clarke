import { Component, EventEmitter, Input, Output } from '@angular/core';
import Product from '../../models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quantity-popup',
  imports: [CommonModule],
  templateUrl: './quantity-popup.component.html',
  styleUrl: './quantity-popup.component.css'
})
export class QuantityPopupComponent {
 @Input() product!: Product;
  @Output() confirm = new EventEmitter<number>();
  @Output() cancel = new EventEmitter<void>();

  quantity: number = 1;

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) this.quantity--;
  }

  onConfirm() {
    this.confirm.emit(this.quantity);
  }

  onCancel() {
    this.cancel.emit();
  }
}
