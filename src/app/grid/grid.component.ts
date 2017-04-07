import { Component, OnInit, Input } from '@angular/core';
import { GridColumn } from './gridColumn.model';
import { Record } from './record.model'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() gridColumns: GridColumn[];

  @Input() gridData: Record[];

  constructor() { }

  ngOnInit() {
  }

}
