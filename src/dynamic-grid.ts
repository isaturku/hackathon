type TLayout = {
  columns: string[];
};

type TGrid = {
  layout: TLayout;

  rows: (string | number)[][];
};

const events = ["change", "add", "remove"] as const;
type TEvent = typeof events[number];
type TAddCallback = (addInfo: { index: number; data: any[] }) => void;

type TChangeCallback = (
  changeInfo: { col: number; row: number; oldVal: any[]; newVal: [] },
) => void;

type TRemoveCallback = (removeInfo: { index: number; data: any[] }) => void;

export default class DynamicGrid {
  gridDomElement: HTMLDivElement;
  rows: any[][];
  addCallBack?: TAddCallback;
  changeCallback?: TChangeCallback;
  removeCallback?: TRemoveCallback;
  constructor(layoutObject: TGrid, domElement: HTMLDivElement) {
    this.gridDomElement = domElement;
    this.rows = layoutObject.rows;
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
  private createDataRow(row: any[]) {
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
  public add(row: any[]) {
    this.rows.push(row);
    this.gridDomElement.append(this.createDataRow(row));
    this.callbacks.get("add")?.({ index: this.rows.length - 1, data: row });
  }
  public remove(index: number) {
    if (this.gridDomElement.childElementCount <= index) {
      throw new Error("Index is out of bounds");
    }
    const nodeToRemove = this.gridDomElement.childNodes[index];
    this.gridDomElement.removeChild(nodeToRemove);
    this.callbacks.get("remove")?.({ index, data: this.rows[index] });
    this.rows.splice(index, 1);
  }
  public items(): any[][] {
    return this.rows;
  }

  public get(index: number): any[] {
    return this.rows[index];
  }
  public on(e: TEvent, callback: () => void) {
    this.callbacks.set(e, callback);
  }
  public on(e: "add", callback: TAddCallback) {
    this.callbacks.set(e, callback);
  }
}
