import { Component } from '@angular/core';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { lucideArrowRight, lucideShield, lucideTruck, lucideMapPin } from '@ng-icons/lucide';
@Component({
  selector: 'app-hero',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideArrowRight, lucideShield, lucideTruck, lucideMapPin })],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}
