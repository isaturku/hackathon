type TLayout = {
  columns: string[];
};

type TGrid = {
  layout: TLayout;

  rows: (string | number)[][];
};

export default class DynamicGrid {
  gridDomElement: HTMLDivElement;
  constructor(layoutObject: TGrid, domElement: HTMLDivElement) {
    this.gridDomElement = domElement;
    domElement.append(this.createHeaderRow(layoutObject.layout.columns));
    layoutObject.rows.forEach((row) =>
      domElement.append(this.createDataRow(row))
    );
  }
  private createHeaderRow(cols: string[]) {
    const headerRow = document.createElement("div");
    headerRow.className = "header-row";
    cols.forEach((header) => {
      const headerCol = document.createElement("div");
      headerCol.innerText = header;
      headerCol.className = "header-col";
      headerRow.append(headerCol);
    });
    return headerRow;
  }
  private createDataRow(row: (string | number)[]) {
    const dataRow = document.createElement("div");
    dataRow.className = "data-row";
    row.forEach((col) => {
      const dataCol = document.createElement("div");
      dataCol.innerText = col.toString();
      dataCol.className = "data-col";
      dataRow.append(dataCol);
    });
    return dataRow;
  }
  public add(row: (string | number)[]) {
    this.gridDomElement.append(this.createDataRow(row));
  }
  public remove(index: number) {
    if (this.gridDomElement.childElementCount <= index) {
      throw new Error("Index is out of bounds");
    } 
    
    this.gridDomElement.removeChild()
  }
}
