import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'] // 👈 plural
})
export class HomeComponent { }
