import { Component, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() appData:any;
  rowNumbers:object = [];
  rowNumber:number = 0;
  faIcons:any = {
    faSearch:faSearch
  }
  constructor() {
  }
  ngOnInit(){
    this.rowNumbers = this.appData.activeConfig.table.rowNumber;
    this.rowNumber = this.appData.activeConfig.table.rows;
    console.log(this.appData,this.rowNumbers,this.rowNumber);
  }
}
