import { Component } from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from "@angular/router";
import { AppData } from '../../constants/app-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // faCoffee = faCoffee;
  data:any = AppData;
  constructor(private router: Router) {
    // this.data.section = this.router.url.split('/').pop();
    // console.log(this.data)
  }
}