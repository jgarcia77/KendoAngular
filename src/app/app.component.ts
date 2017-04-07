import { Component } from '@angular/core';
import { GridColumn } from './grid/gridColumn.model';
import { Record } from './grid/record.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  gridColumns: GridColumn[] = [
    new GridColumn("ProductID", "Product ID", "120"),
    new GridColumn("ProductName", "Product Name", ""),
    new GridColumn("UnitPrice", "Unit Price", "230"),
    new GridColumn("Discontinued", "Discontinued", "120")
  ];

  gridData: Record[] = [
    new Record(
        1,  
        "Chai",  
        18.0000,  
        true), 
    new Record(  
        2,  
        "Chang",  
        19.0000,  
        false), 
    new Record(  
        3,  
        "Aniseed Syrup",  
        10.0000,  
        false),
    new Record(  
        4,  
        "Chef Anton's Cajun Seasoning",  
        22.0000,  
        false), 
    new Record(  
        5,  
        "Chef Anton's Gumbo Mix",  
        21.3500,  
        false  
    ), 
    new Record(  
        6,  
        "Grandma's Boysenberry Spread",  
        25.0000,  
        false  
    )];

  // Kendo UI Button click event handler
  buttonClicked() {
    alert("Clickity Clack!")
  }
}
