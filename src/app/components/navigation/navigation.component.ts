import { Component } from '@angular/core';
import { faEllipsisV, faUser, faCloudArrowDown, faFilePdf } from '@fortawesome/free-solid-svg-icons';

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
    faFilePdf : faFilePdf
  };
  selectedMonth:any;
  months = [
      { id: 1, name: 'January' },
      { id: 2, name: 'February' },
      { id: 3, name: 'March' },
      { id: 4, name: 'April' },
      { id: 5, name: 'May' },
      { id: 6, name: 'June' },
      { id: 7, name: 'July' },
      { id: 8, name: 'August' },
      { id: 9, name: 'September' },
      { id: 10, name: 'October' },
      { id: 11, name: 'November' },
      { id: 12, name: 'December' },
  ];

  ngOnInit() {
    this.selectedMonth = (new Date().getMonth() + 1);
  }
}
