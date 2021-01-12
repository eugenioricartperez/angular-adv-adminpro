import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linkTheme = document.querySelector('#theme');
  activeTheme: string="";
  constructor() { 
    console.log("settingsService");
    this.activeTheme = localStorage.getItem('theme');
    console.log(`activeTheme ${this.activeTheme}`);
    this.linkTheme.setAttribute('href',this.activeTheme);
  }

  changeTheme(theme: string){
    
    const url =`./assets/css/colors/${theme}.css`
    console.log(this.linkTheme);
    this.linkTheme.setAttribute('href',url);  
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const theme = localStorage.getItem('theme');
    const links = document.querySelectorAll('.selector');
    links.forEach( ele => {
      ele.classList.remove('working');
      const butThemeUrl =`./assets/css/colors/${ele.getAttribute('data-theme')}.css`
      if (butThemeUrl===theme)
      {
        ele.classList.add('working');
      }
    })
  }
}
