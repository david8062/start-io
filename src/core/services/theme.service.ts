import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeKey = 'dark-theme';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadTheme();
  }

  toggleTheme(): void {
  if (isPlatformBrowser(this.platformId)) {
    document.body.classList.add('theme-transition');
    setTimeout(() => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem(this.darkModeKey, String(isDark));

      setTimeout(() => {
        document.body.classList.remove('theme-transition');
      }, 300);
    });
  }
}


  loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isDark = localStorage.getItem(this.darkModeKey) === 'true';
      if (isDark) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    }
  }

  isDarkTheme(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return document.body.classList.contains('dark-theme');
    }
    return false;
  }
}
