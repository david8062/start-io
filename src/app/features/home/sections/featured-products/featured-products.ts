import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string | null;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  features: string[];
}

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-products.html',
  styleUrls: ['./featured-products.scss'],
})
export class FeaturedProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'GPS Navigator Pro X1',
      price: '$299.99',
      originalPrice: '$349.99',
      rating: 4.8,
      reviews: 124,
      image: '/assets/images/placeholder-6u2uk.png',
      badge: 'Bestseller',
      features: ['Pantalla 7"', 'Mapas actualizados', 'Bluetooth'],
    },
    {
      id: 2,
      name: 'Smart Dash Cam 4K',
      price: '$189.99',
      originalPrice: null,
      rating: 4.6,
      reviews: 89,
      image: '/assets/images/placeholder-dux5f.png',
      badge: 'Nuevo',
      features: ['Grabación 4K', 'Visión nocturna', 'WiFi'],
    },
    {
      id: 3,
      name: 'Portable GPS Tracker',
      price: '$79.99',
      originalPrice: '$99.99',
      rating: 4.7,
      reviews: 156,
      image: '/assets/images/placeholder-aim8n.png',
      badge: 'Oferta',
      features: ['Batería 30 días', 'Resistente al agua', 'App móvil'],
    },
    {
      id: 4,
      name: 'Marine GPS Navigator',
      price: '$449.99',
      originalPrice: null,
      rating: 4.9,
      reviews: 67,
      image: '/assets/images/waterproof-marine-gps.png',
      badge: 'Premium',
      features: ['Resistente al agua', 'Cartas náuticas', 'Sonar'],
    },
  ];
Math: any;

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i);
  }
}
