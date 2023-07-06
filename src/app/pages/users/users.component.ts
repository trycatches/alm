import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppData } from 'src/app/constants/app-data';
declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  appData:any = AppData;
  constructor(private router: Router) {
    this.appData.section = this.router.url.split('/').pop();
    this.appData.activeConfig = this.appData.configs[this.appData.section];
    console.log(this.appData)
  }
  addUser(){
    $('#myModal').modal('show')
  }
}
