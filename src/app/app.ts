import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header';
import { HomeComponent } from "./features/home/home";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portafolio';
}
