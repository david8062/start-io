import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portafolio';
}
