import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle';
import { heroStar, heroShoppingCart, heroBars3, heroUser } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, ThemeToggleComponent],
  viewProviders: [provideIcons({ heroStar, heroShoppingCart, heroBars3, heroUser })],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {}
