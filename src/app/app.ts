import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header';
import { HomeComponent } from "./features/home/home";
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portafolio';
}
