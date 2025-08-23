import { Component } from '@angular/core';
import { Hero } from "./sections/hero/hero";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ Hero],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'] // 👈 plural
})
export class HomeComponent { }
