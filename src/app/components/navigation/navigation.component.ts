import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faEllipsisV, faUser, faCloudArrowDown, faFileExcel, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  faIcons = {
    faEllipsisV : faEllipsisV,
    faUser : faUser,
    faDownload:faCloudArrowDown,
    faFile : faFileExcel,
    faPlus : faPlusCircle
  };
  selectedMonth:any;
  @Input() appData:any;
  u:string = "";
  @Output("addUser") addUser: EventEmitter<any> = new EventEmitter();


  constructor(private router: Router) {
  }
  
  ngOnInit() {
    console.log(this.appData)
    // this.selectedMonth = this.appData.appData.selectedMonth; 
    this.selectedMonth = (new Date().getMonth() + 1);
    this.u = this.appData.profile.username.charAt(0);
  }
  addUserEmit(){
    this.addUser.emit();
  }
}
