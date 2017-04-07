import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../grid/record.model'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() record: Record;
  
  constructor() { }

  ngOnInit() {
  }

}
