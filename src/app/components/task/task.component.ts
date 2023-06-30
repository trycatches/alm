import { Component } from '@angular/core';
import { faFileExcel, faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  faIcons = {
    faBgIcont : faChartPie
  }
}
