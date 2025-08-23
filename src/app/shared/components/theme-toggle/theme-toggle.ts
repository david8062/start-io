import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroSun, heroMoon } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({ heroSun, heroMoon })],
  templateUrl: './theme-toggle.html',
  styleUrls: ['./theme-toggle.scss']
})
export class ThemeToggleComponent {
  theme: 'light' | 'dark' = 'light';

  constructor(@Inject(DOCUMENT) private doc: Document) {
    const current = this.doc?.documentElement?.getAttribute('data-theme');
    if (current === 'dark') {
      this.theme = 'dark';
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.doc?.documentElement?.setAttribute('data-theme', this.theme);
  }
}
