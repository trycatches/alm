import { Component, Input } from '@angular/core';
import { faPlay, faCircleCheck, faClock, faUser, faHourglass3 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  @Input() level = 0;
  faIcons:any = {
    faPlay : faPlay,
    faCircleCheck : faCircleCheck,
    faClock : faClock,
    faUser : faUser,
    faHourglass : faHourglass3
  }
}
