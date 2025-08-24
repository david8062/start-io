import { Component } from '@angular/core';
import { Hero } from "./sections/hero/hero";
import { FeaturedProductsComponent } from './sections/featured-products/featured-products';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, FeaturedProductsComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'] // 👈 plural
})
export class HomeComponent { }
