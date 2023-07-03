import { Component } from '@angular/core';
import { faPlay, faCircleCheck, faClock, faUser, faHourglass3 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.scss']
})
export class SubTaskComponent {
  faIcons:any = {
    faPlay : faPlay,
    faCircleCheck : faCircleCheck,
    faClock : faClock,
    faUser : faUser,
    faHourglass : faHourglass3
  }
}
