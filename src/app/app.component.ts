import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';

import { CreateReportDialogComponent } from './create-report-dialog/create-report-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  // public modo = false;
  public Name: string;
  public Description: string;
  public IsDefault: boolean;
  public newConfig: any;
  public selectedName: string;
  public selectedDescription: string;
  public selectedIsDefault: boolean;


  constructor(public dialog: MatDialog) { }
  // constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void { }


   /**
   * Public Methods
   */

  // public changeModo(): void {
  //   this.modo = !this.modo;
  // }

  public newInforme(): void {
    const createDialog = this.dialog.open(CreateReportDialogComponent, {
      data: {
        Name: this.Name, Description: this.Description, IsDefault: this.IsDefault, Options: this.newConfig
      }
    });

    createDialog.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
