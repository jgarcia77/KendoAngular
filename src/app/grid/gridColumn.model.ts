export class GridColumn {
    field: string;
    title: string;
    width: string;

    constructor(field: string, title: string, width: string) {
        this.field = field;
        this.title = title;
        this.width = width;
    }
}