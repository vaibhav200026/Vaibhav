import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Spreadsheet } from 'dhx-spreadsheet';
 
@Component({
  selector: 'app-spreadsheet',
  template: `
  <script type="text/javascript" src="./../../../node_modules/dhx-spreadsheet/codebase/spreadsheet.min.js"></script>  
<link rel="stylesheet" href="./../../../node_modules/dhx-spreadsheet/codebase/spreadsheet.css">


  <div #widget class='widget-box-wide'></div>
  `,
})


export class SpreadsheetComponent implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  spreadsheet: Spreadsheet;
  data:any;
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
    

    this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
      toolbar: this.toolbar,
      menu: this.menu,
      editLine: this.editLine,
      rowsCount: this.rowsCount,
      colsCount: this.colsCount,
      rows: this.rows,
      columns: this.columns,
      
    });

   
    this.spreadsheet.events.on("afterValueChange", (cell: any,value: any)=>{
      // console.log("A afterSelectionSet in ", "C2" );
      // console.log(this.event = `Value in cell ${C2}`);
      this.cd.detectChanges();
      var rowvalue = cell.match(/(\d)/);          
      if (rowvalue) { 
          console.log( "row number is ",rowvalue[0])
      }
      // this.spreadsheet.spreadsheet.setValue("A1", "SSM");
      // this.spreadsheet.setValue("A7", "SSM");                 
      // console.log(this.rows);

     

 var alphabet = ["b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 
 for (var i = 0; i < alphabet.length; i++) {
    
    var  combined = alphabet[i].concat(rowvalue[0])
    var cellid = [].concat(combined)
    console.log(cellid)
  }
  console.log("me",cellid)
      var columns = "a5,b5";

      console.log(this.spreadsheet.getValue(columns));
      console.log("2nd value",value)
      
      });   

    

  this.data = this.spreadsheet.load("assets/datatable.json");
  this.spreadsheet.parse(this.data);
}

  ngOnDestroy() {
    // console.log("IN DESTRUCTOR");
    this.spreadsheet.destructor();
  }

  
}