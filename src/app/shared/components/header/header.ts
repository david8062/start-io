import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModalComponent } from '../../components/modals/car-modal/car-modal';
import { ThemeService } from '../../../../core/services/theme.service';

interface CartItem {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CarModalComponent],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  menuOpen = false;
  cartOpen = false;
  showModal = false;

  cartItems: CartItem[] = [
    { name: 'Camiseta Angular', price: 120000, image: '' },
    { name: 'Gorra StartIO', price: 80000, image: '' }
  ];

  constructor(public themeService: ThemeService) {}

  get cartCount(): number {
    return this.cartItems.length;
  }

  get total(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleCartPreview(event: MouseEvent) {
    event.stopPropagation();
    this.cartOpen = !this.cartOpen;
  }

  openCartModal(event: MouseEvent) {
    event.stopPropagation(); // evita que cierre el preview al hacer clic
    this.showModal = true;
    this.cartOpen = false;
  }

  closeCartModal() {
    this.showModal = false;
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }

  @HostListener('document:click')
  closeCartOnOutsideClick() {
    if (this.cartOpen) {
      this.cartOpen = false;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
