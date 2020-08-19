import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
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

   
    // var rangeValues = Spreadsheet.getValue("A1:A3");
    // console.log(rangeValues);

    // this.spreadsheet.events.on("StyleChange", function(cells: any){
    //   console.log("The style of cell "+Spreadsheet.selection.get()+" is changed");
    // });
    
    this.spreadsheet.events.on("AfterColumnAdd", function(cells: any){
      // console.log("A new column is added");
    }); 
  
    this.spreadsheet.events.on("AfterrowAdd", function(cells: any){
    // console.log("A new row is added",cells);
    });


    this.spreadsheet.events.fire("beforeValueChnage", function(cells: any){
      // console.log("BEFORE VALUE CHANGE");
    //   cells.forEach(function getValue(){
    //     console.log(this.value);
    // });
    // this.spreadsheet.getValue("A2");
    
    })
  
    // afterValueChange
    this.spreadsheet.events.on("afterValueChange", function(cells: string){
    
    console.log("1... *****");
    console.log("arguments:-",arguments);
    console.log("Value of cell "+ this.spreadsheet.getValue() +" has changed");
    console.log(arguments[0]);
    console.log(arguments[1]);
    // cells.valueOf()

    // cells.
    // console.log("A afterValueChange in ", cells );
    var row = cells.match(/(\d)/);          
    if (row) { 
        // console.log("2... *****")
        // console.log( "row number is ",row[0])
    }
    var col = cells.match(/(\w)/);          
    if (col) { 
        // console.log("3... *****")
        // console.log( "col number is ",col[0])
    }
    var celldata = "";
    for (var i = 0; i < arguments.length; i++) {
      celldata = JSON.stringify(arguments[i]) ;
      
    }
    // console.log("4... *****");
    // console.log("arguments:-",arguments);
    // console.log(celldata);
    // // console.log("UPDATE tablename SET ",col[0],"=",celldata ,"WHERE rownoumber =",row[0]);
    // console.log("5... *****");
    // console.log("");
    // console.log("6... *****");
    // //  ////////     
    //  var input = []; // initialise an empty array
    //  var temp = '';   
    //      temp =celldata ;
    //      console.log(temp);
    //      if (temp === "" || temp === null) {
  
    //      } else {
    //          input.push(temp);  // the array will dynamically grow
    //      }
    //      console.log(input);


    // this.spreadsheet(row[0],col[0]).getValue();
//  this.spreadsheet.getValue();
 
    // this.spreadsheet.forEachRow(function(id){
    //   //your code here 
    //   //id - row's id
    //   });

    //creating an array literal with static values
// var rowdata=[1,2,3,4,5,6,7,8,9,10];
//iterating array elements with for loop
// for (var i = 0; i < rowdata.length; i++) {
//   console.log("Array element of index rowdata["+i+"] is :",rowdata[i]);
// }
    });

    

     // <--start sql-->
      // UPDATE Customers
      // SET ColumName='data', ColumName='data'
      // WHERE rownoumber;
      
      // <--end sql-->


    //  all selection
    this.spreadsheet.events.on("afterSelectionSet", function(cells: string){
      // console.log("A afterSelectionSet in ", cells );
      var matches = cells.match(/(\d)/);          
      if (matches) { 
          // console.log( "row number is ",matches[0])
      }
      var args = "";
      for (var i = 1; i < arguments.length; i++) {
        args =  JSON.stringify(arguments[i]) ;
        // console.log(arguments[i]);
        // console.log("a cell value is", args)
      }
      });




      // <--start sql-->
      // UPDATE Customers
      // SET ContactName='Alfred Schmidt', City='Frankfurt'
      // WHERE CustomerID=1;
      
      // <--end sql-->

      // UPDATE `registration` SET `lastname` = 'Masaye', `email` = 'masayevaibhav1@gmail.com', `Contact` = '9172183492' WHERE `registration`.`Id` = 1;

  //     this.spreadsheet.events.fire("afterValueChange", function(cells: string){
  
  //   console.log("A afterValueChange in ", cells );
  //   var matches = cells.match(/(\d+)/);          
  //   if (matches) { 
  //       console.log( "row number is ",matches[0])
  //   } 
  // });
  //    this.spreadsheet.events.detach("afterValueChange", function(cells: string){
  
  //   console.log("A afterValueChange in ", cells );
  //   var matches = cells.match(/(\d+)/);          
  //   if (matches) { 
  //       console.log( "row number is ",matches[0])
  //   } 
  // });



// contactForm.attachEvent("onButtonClick", function(name){
//   contactForm.save();     //sends the values of the updated row to the server
// });

  // var data = this.spreadsheet.load('assets/datatable.json');
  // console.log("before JSON load")
  this.data = this.spreadsheet.load("assets/datatable.json");
  this.spreadsheet.parse(this.data);
  // console.log("after parse");
 


}

  ngOnDestroy() {
    // console.log("IN DESTRUCTOR");
    this.spreadsheet.destructor();
  }
}