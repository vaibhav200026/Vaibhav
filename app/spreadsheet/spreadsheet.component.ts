import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Spreadsheet } from 'dhx-spreadsheet';

@Component({
  selector: 'app-spreadsheet',
  template: `
  <script type="text/javascript" src="./../../../node_modules/dhx-spreadsheet/codebase/spreadsheet.min.js"></script>  
<link rel="stylesheet" href="./../../../node_modules/dhx-spreadsheet/codebase/spreadsheet.css">

<button (click)="SaveValue()">Save</button>

  <div #widget class='widget-box-wide'></div>
  `,
})


export class SpreadsheetComponent implements OnInit, OnDestroy {
  @ViewChild('widget', { static: true }) container: ElementRef;
  spreadsheet: Spreadsheet;
  data: any;
  event: string;

  constructor(private cd: ChangeDetectorRef) {
  }
  @Input() toolbar: string[];
  @Input() menu: boolean;
  @Input() editLine: boolean;
  @Input() rowsCount: number;
  @Input() colsCount: number;
  @Input() rows: number;
  @Input() columns: number;

  ngOnInit() {
    var Sqlcellsvalue = [];

    this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
      toolbar: this.toolbar,
      menu: this.menu,
      editLine: this.editLine,
      rowsCount: this.rowsCount,
      colsCount: this.colsCount,
      rows: this.rows,
      columns: this.columns,
    });
    var rowsvalue = "";

    this.spreadsheet.events.on("afterValueChange", (cell: any, value: any) => {
      this.cd.detectChanges();
      var rowvalue = cell.match(/(\d+)/);
      if (rowvalue) {
        console.log("row number is ", rowvalue[0])
      }
      var columnnumber = cell.match(/(\w)/);
      if (columnnumber) {
        console.log("columnnumber number is ", columnnumber[0])
      }
      // var colvalues = this.spreadsheet.getValue(cell);
      // console.log(colvalues)
      var str = columnnumber[0];
      var n = str.charCodeAt(0) - 65;
      var columnid = n + 1;
      console.log(columnid);

      var rowid = rowvalue[0] - 1;
      rowsvalue = this.spreadsheet._grid.data.getItem(this.spreadsheet._grid.data.getId(rowid))
      console.log(rowsvalue)

      var arr = new Array(50);
      arr.splice(columnid, 0, value);
      console.log(arr.push());
      arr.slice(1);
      console.log(arr);
      var result =[].concat(arr);
      console.log("me=",result);      
    });

    var columnslength=this.spreadsheet._grid.config.columns.length;
    console.log("columnslength=",columnslength)

    this.data = this.spreadsheet.load("assets/datatable.json");
    this.spreadsheet.parse(this.data);
  }
  SaveValue() {

  }
  ngOnDestroy() {
    // console.log("IN DESTRUCTOR");
    this.spreadsheet.destructor();
  }


}