import { Component } from '@angular/core';
import { faFileExcel, faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  faIcons = {
    faBgIcont : faChartPie
  }
}
