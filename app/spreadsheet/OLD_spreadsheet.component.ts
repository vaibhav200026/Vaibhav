// import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
// import { Spreadsheet } from 'dhx-spreadsheet';

// @Component({
//   selector: 'app-spreadsheet',
//   template: `
//   <script type="text/javascript" src="./../../../node_modules/dhx-spreadsheet/codebase/spreadsheet.min.js"></script>  
// <link rel="stylesheet" href="./../../../node_modules/dhx-spreadsheet/codebase/spreadsheet.css">


//   <div #widget class='widget-box-wide'></div>
//   `,
// })


// export class SpreadsheetComponent implements OnInit, OnDestroy {
//   @ViewChild('widget', {static: true}) container: ElementRef;
//   spreadsheet: Spreadsheet;
//   data:any;
//   event: string;

//   constructor(private cd: ChangeDetectorRef) {
//   }
//   @Input() toolbar: string[];
//   @Input() menu: boolean;
//   @Input() editLine: boolean;
//   @Input() rowsCount: number;
//   @Input() colsCount: number;
//   @Input() rows: number;
//   @Input() columns: number;


//   ngOnInit() {


//     this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
//       toolbar: this.toolbar,
//       menu: this.menu,
//       editLine: this.editLine,
//       rowsCount: this.rowsCount,
//       colsCount: this.colsCount,
//       rows: this.rows,
//       columns: this.columns,

//     });

//     this.spreadsheet.events.on("afterColumnAdd", function(cells: any){
//       console.log("A new column is added", cells);
//     }); 

//     this.spreadsheet.events.on("AfterrowAdd", function(cells: any){
//     // console.log("A new row is added",cells);
//     });


//     this.spreadsheet.events.on("beforeValueChnage", function(cells: any){
//       // console.log("BEFORE VALUE CHANGE");

//     })

//     var value ="";
//     // console.log("1st value",value);

//     // this.spreadsheet.events.on("afterValueChange", (cell: any,value: any)=>{
//     //   console.log("A afterSelectionSet in ", cell );
//     //   console.log(this.event = `Value in cell ${value}`);
//     //   this.cd.detectChanges();

//     //   var rowvalue = cell.match(/(\d)/);          
//     //   if (rowvalue) { 
//     //       console.log( "row number is ",rowvalue[0])
//     //   }

//     //   // console.log("UPDATE Customers SET "ColumName='data', ColumName='data' WHERE "rownoumber")
//     //   var items = new Array(10);// initialise an empty array
//     //   for (var i = 0; i < items.length; i++) {
//     //     items[i] = new Array();
//     //   }
//     //   var temp = '';   
//     //       temp =value ;
//     //       console.log(temp);
//     //       if (temp === "" || temp === null) {     
//     //       } else {
//     //         items.push(temp);  // the array will dynamically grow
//     //           // input.insert(2, 'C');
//     //       }
//     //       console.log(items);

//     //       console.log("2nd value",value)
//     //   });   


 // var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      // var colvalues = "";
      // var cellid = [];
      // for (var i = 0; i < alphabet.length; i++) {
      //   var combined = alphabet[i].concat(rowid)
      //   colvalues = this.spreadsheet.getValue(combined);
      //   console.log(colvalues)
      //   cellid.push(combined)
      // }
      // Sqlcellsvalue.push(...cellid);
//       // //  ////////     



//      // <--start sql-->
//       // UPDATE Customers
//       // SET ColumName='data', ColumName='data'
//       // WHERE rownoumber;

//       // <--end sql-->

//       this.spreadsheet.selection.setSelectedCell("B1:B8");
//       this.spreadsheet.setStyle("B1:B8",{background:"red", border:"solid 1px yellow"});

//     //  all selection
//     this.spreadsheet.events.on("afterSelectionSet", (cell: any)=>{

//       console.log("A afterSelectionSet in ", cell );
//       var matches = cell.match(/(\d)/);          
//       if (matches) { 
//           console.log( "row number is ",matches[0])
//       }
//       var args = "";
//       for (var i = 1; i < arguments.length; i++) {
//         args =  JSON.stringify(arguments[i]) ;
//         console.log(arguments[i]);
//         console.log("a cell value is", args)
//       }
//       });

// function func() { 

//     // Original array 
//     const items = ["b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
//     const copy = []; 

//     items.forEach(function (item) { 
//       item.concat(rowid)
//         copy.push(item);  // row id is dynamic value
//     }); 

//     console.log("2nd",copy); 
// } 
//    func()
//       // <--start sql-->
//       // UPDATE Customers
//       // SET ContactName='Alfred Schmidt', City='Frankfurt'
//       // WHERE CustomerID=1;

//       // <--end sql-->

//       // UPDATE `registration` SET `lastname` = 'Masaye', `email` = 'masayevaibhav1@gmail.com', `Contact` = '9172183492' WHERE `registration`.`Id` = 1;
//   // var data = this.spreadsheet.load('assets/datatable.json');
//   // console.log("before JSON load")
//   this.data = this.spreadsheet.load("assets/datatable.json");
//   // this.spreadsheet.parse(this.data);
//   // console.log("after parse");
// }

//   ngOnDestroy() {
//     // console.log("IN DESTRUCTOR");
//     this.spreadsheet.destructor();
//   }


// }