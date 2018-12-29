import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { CreateReportDialogComponent } from './create-report-dialog/create-report-dialog.component';
import { EditReportDialogComponent } from './edit-report-dialog/edit-report-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  public mode = false;
  public Name: string;
  public Description: string;
  public IsDefault: boolean;
  public newConfig: any;
  public selectedName: string;
  public selectedDescription: string;
  public selectedIsDefault: boolean;
  public reportsCreated: any;
  public selectedConfig: any;
  public selectedReport: any;

  @ViewChild(CreateReportDialogComponent) report: any;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void { }


  /**
  * Public Methods
  */

  public changeMode(): void {
    this.mode = !this.mode;
  }

  /**
   * Method to create a new report
   */
  public newReport(): void {
    const createDialog = this.dialog.open(CreateReportDialogComponent, {
      data: {
        Name: this.Name, Options: this.newConfig
      }
    });

    createDialog.afterClosed().subscribe(result => {
      if (result === undefined) {
        this.snackBar.open('Report has not been created', '', {
          duration: 2000,
        });
      } else if (result.Name === undefined) {
        this.snackBar.open('Introuce a name to create a report', '', {
          duration: 2000,
        });
      } else if (result.Name !== undefined) {
        if (this.reportsCreated !== undefined) { // If there are reports already, add a new one
          this.reportsCreated.push(result);
        } else { // Initialize reportsCreated to create first report
          this.reportsCreated = [];
          this.reportsCreated.push(result);
        }
      }
    });
  }

  /**
   * Method for editing existing report
   */
  public editReport(): void {
    if (this.selectedReport !== undefined) {
      const editDialog = this.dialog.open(EditReportDialogComponent, {
        data: {
          Name: this.selectedReport.Name, Options: this.selectedReport.Options
        }
      });

      editDialog.afterClosed().subscribe(result => {
        console.log(result);
      })
    } else {
      this.snackBar.open('Select a report first', '', {
        duration: 2000,
      });
    }
  }

  /**
   * Method to get pivot table configuration
   * @param e captures event from child component
   */
  public reportConfig(e): void {
    this.newConfig = e;
  }

  /**
   * Method for child data binding
   * @param r report information
   */
  public selectReport(r): void {
    this.selectedConfig = r.Options;
    this.selectedReport = r;
    console.log(this.selectedReport);
  }
}
