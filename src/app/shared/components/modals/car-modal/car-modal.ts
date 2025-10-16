import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CartItem {
  name: string;
  category?: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-car-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-modal.html',
  styleUrls: ['./car-modal.scss']
})
export class CarModalComponent {
  @Input() items: CartItem[] = [];
  @Output() close = new EventEmitter<void>();

  subtotal = 229.97;
  shipping = 9.99;
  taxes = 27.6;

  get total(): number {
    return this.subtotal + this.shipping + this.taxes;
  }

  closeModal() {
    this.close.emit();
  }

  increment(item: CartItem) {
    item.quantity++;
  }

  decrement(item: CartItem) {
    if (item.quantity > 1) item.quantity--;
  }

  removeItem(item: CartItem) {
    this.items = this.items.filter(i => i !== item);
  }
}
