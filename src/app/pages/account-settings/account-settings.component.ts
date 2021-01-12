import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  //public linkTheme = document.querySelector('#theme');
  //public links: NodeListOf<Element> 
  //selectedTheme: string;
  //cssStored: string;
  constructor(private settingsServices: SettingsService) { }

  ngOnInit(): void {
      this.settingsServices.checkCurrentTheme();

  }

  changeTheme(theme: string){
   // this.selectedTheme=theme;
    /*     
    const url =`./assets/css/colors/${theme}.css`
    console.log(this.linkTheme);
    this.linkTheme.setAttribute('href',url);  
    localStorage.setItem('theme',url); */
    this.settingsServices.changeTheme(theme);
    
  }




}
