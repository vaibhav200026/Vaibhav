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
  rowsvalue: any;
  cellvalue: any;
  columnid: any;
  columnslength: any;
  indexvalues: any;
  final = [];
  datasqlvalue = [];

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

    this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
      toolbar: this.toolbar,
      menu: this.menu,
      editLine: this.editLine,
      rowsCount: this.rowsCount,
      colsCount: this.colsCount,
      rows: this.rows,
      columns: this.columns,
    });


    this.spreadsheet.events.on("afterValueChange", (cell: any, value: any) => {
      this.cd.detectChanges();
      var rowvalue = cell.match(/(\d+)/);
      if (rowvalue) {
        // console.log("row number is ", rowvalue[0])
      }
      var columnnumber = cell.match(/(\w)/);
      if (columnnumber) {
        // console.log("columnnumber number is ", columnnumber[0])
      }
      // var colvalues = this.spreadsheet.getValue(cell);
      // console.log(colvalues)
      this.cellvalue = value;
      var str = columnnumber[0];
      var n = str.charCodeAt(0) - 65;
      var columnname = n + 1;
      // console.log(columnname);

      this.columnid = columnname;

      var rowid = rowvalue[0] - 1;
      this.rowsvalue = this.spreadsheet._grid.data.getItem(this.spreadsheet._grid.data.getId(rowid))

      // console.log(this.rowsvalue)
      var alphabet = ["a"];
      var cellid = [];
      for (var i = 0; i < alphabet.length; i++) {
        var combined = alphabet[i].concat(rowvalue[0])
        this.indexvalues = this.spreadsheet.getValue(combined);
      }

      var arr = new Array(this.columnslength);
 
      arr.splice(0, 0, this.indexvalues);
      arr.splice(this.columnid, 0, value);
      arr.push();
      arr.slice(1);
      this.final.push(arr);

    });


    this.columnslength = this.spreadsheet._grid.config.columns.length;
    console.log("columnslength=", this.columnslength)

    this.data = this.spreadsheet.load("assets/datatable.json");
    this.spreadsheet.parse(this.data);
  }

  SaveValue() {
    console.log("in save value")

    // console.log(this.final)
    function arrayEqual(a, b) {
        if (a.length !== b.length) { return false; }
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    
    function contains(array, item) {
        for (var i = 0; i < array.length; ++i) {
            if (arrayEqual(array[i], item)) {
                return true;
            }
        }
        return false;
    }
    
    function normalize(array) {
        var result = [];
        for (var i = 0; i < array.length; ++i) {
            if (!contains(result, array[i])) {
                result.push(array[i]);
            }
        }
        return result;
    }
    
    this.datasqlvalue = normalize(this.final);
    console.log(this.datasqlvalue);


    
  }

  ngOnDestroy() {
    // console.log("IN DESTRUCTOR");
    this.spreadsheet.destructor();
  }


}