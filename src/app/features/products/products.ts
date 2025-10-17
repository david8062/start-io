import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  badge?: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  encapsulation: ViewEncapsulation.None 
})
export class Products {
  products: Product[] = [
    {
      id: 1,
      name: 'GPS Vehicular TK-900',
      category: 'vehicular',
      price: 89.99,
      rating: 4.5,
      description: 'Dispositivo con imán para instalación fácil en cualquier vehículo. Resistente al agua y con batería de larga duración.',
      image: 'https://via.placeholder.com/200x200?text=GPS+Vehicular',
      badge: 'Nuevo'
    },
    {
      id: 2,
      name: 'Tracker Personal PT-40',
      category: 'personal',
      price: 69.99,
      rating: 4.2,
      description: 'Dispositivo compacto para seguimiento de personas y mascotas. Diseño discreto y cómodo de llevar.',
      image: 'https://via.placeholder.com/200x200?text=Tracker+Personal',
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'GPS para Flotas FM-5000',
      category: 'flota',
      price: 149.99,
      rating: 4.8,
      description: 'Solución avanzada para gestión de flotas con sensores adicionales. Ideal para empresas de transporte.',
      image: 'https://via.placeholder.com/200x200?text=GPS+Flotas',
      badge: 'Profesional'
    },
    {
      id: 4,
      name: 'GPS para Mascotas PetTrack',
      category: 'mascotas',
      price: 49.99,
      rating: 4.0,
      description: 'Localizador GPS para mascotas con collar ajustable. App móvil incluida para seguimiento en tiempo real.',
      image: 'https://via.placeholder.com/200x200?text=GPS+Mascotas',
      badge: 'Oferta'
    }
  ];

  filteredProducts: Product[] = [...this.products];

  // Filtros
  categoryFilter = 'all';
  priceFilter = 'all';
  ratingFilter = 'all';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  // --- Métodos ---
  filterProducts() {
    this.filteredProducts = this.products.filter(p => {
      if (this.categoryFilter !== 'all' && p.category !== this.categoryFilter) return false;
      if (this.ratingFilter !== 'all' && p.rating < parseFloat(this.ratingFilter)) return false;
      if (this.priceFilter !== 'all') {
        const [min, max] = this.priceFilter.split('-').map(v => v === '+' ? Infinity : parseFloat(v));
        if (p.price < min || p.price > max) return false;
      }
      if (this.minPrice !== null && p.price < this.minPrice) return false;
      if (this.maxPrice !== null && p.price > this.maxPrice) return false;
      return true;
    });
  }

  addToCart(product: Product) {
    alert(`Producto "${product.name}" añadido al carrito 🛒`);
  }

  viewProductDetails(product: Product) {
    alert(`Detalles de ${product.name}\n\nPrecio: $${product.price.toFixed(2)}\nCalificación: ${product.rating}/5\n\n${product.description}`);
  }

  getProductIcon(category: string) {
    const icons: Record<string, string> = {
      vehicular: 'car',
      personal: 'user',
      flota: 'truck',
      mascotas: 'paw'
    };
    return icons[category] || 'map-marker-alt';
  }

  getCategoryName(category: string) {
    const names: Record<string, string> = {
      vehicular: 'GPS Vehicular',
      personal: 'Tracker Personal',
      flota: 'GPS para Flotas',
      mascotas: 'GPS para Mascotas'
    };
    return names[category] || 'GPS';
  }

  renderStars(rating: number) {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    return {
      full: Array(full),
      half,
      empty: Array(5 - Math.ceil(rating))
    };
  }
}
