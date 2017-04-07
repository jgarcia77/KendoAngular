import { Component } from '@angular/core';
import { GridColumn } from './gridColumn.model';

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

  gridData: any[] = [{  
        "ProductID": 1,  
        "ProductName": "Chai",  
        "UnitPrice": 18.0000,  
        "Discontinued": true  
    }, {  
        "ProductID": 2,  
        "ProductName": "Chang",  
        "UnitPrice": 19.0000,  
        "Discontinued": false  
    }, {  
        "ProductID": 3,  
        "ProductName": "Aniseed Syrup",  
        "UnitPrice": 10.0000,  
        "Discontinued": false  
    }, {  
        "ProductID": 4,  
        "ProductName": "Chef Anton's Cajun Seasoning",  
        "UnitPrice": 22.0000,  
        "Discontinued": false  
    }, {  
        "ProductID": 5,  
        "ProductName": "Chef Anton's Gumbo Mix",  
        "UnitPrice": 21.3500,  
        "Discontinued": false  
    }, {  
        "ProductID": 6,  
        "ProductName": "Grandma's Boysenberry Spread",  
        "UnitPrice": 25.0000,  
        "Discontinued": false  
    }];

  // Kendo UI Button click event handler
  buttonClicked() {
    alert("Clickity Clack!")
  }
}
