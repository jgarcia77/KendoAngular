export class Record {
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    Discontinued: boolean;
    History: string;
    Notes: string;

    constructor(productID: number, productName: string, unitPrice: number, discontinued: boolean){
        this.ProductID = productID;
        this.ProductName = productName;
        this.UnitPrice = unitPrice;
        this.Discontinued = discontinued;
        this.History = "This is the history for " + productName;
        this.Notes = "This is the noties for " + productName;
    }
}