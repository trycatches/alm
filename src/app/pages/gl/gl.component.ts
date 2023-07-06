import { Component } from '@angular/core';
import { AppData } from 'src/app/constants/app-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gl',
  templateUrl: './gl.component.html',
  styleUrls: ['./gl.component.scss']
})
export class GlComponent {
  appData:any = AppData;
  constructor(private router: Router) {
    this.appData.section = this.router.url.split('/').pop();
    this.appData.activeConfig = this.appData.configs[this.appData.section];
    console.log(this.appData)
  }
}
