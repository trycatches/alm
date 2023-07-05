import { Component } from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // faCoffee = faCoffee;
  data:any = {
    section:"",
    navigations:[
      {
        title:"Data Leads",
        link:"data-leads"
      },
      {
        title:"Calc & Summ Runs",
        link:"summ-runs"
      },
      {
        title:"GL Bucketing",
        link:"gl-bucketing"
      },
      {
        title:"GL Mapping",
        link:"gl-mapping"
      }
    ]
  }
  constructor(private router: Router) {
    this.data.section = this.router.url.split('/').pop();
    console.log(this.data)
  }
}
