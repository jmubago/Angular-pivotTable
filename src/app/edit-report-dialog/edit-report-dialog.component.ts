import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-report-dialog',
  templateUrl: './edit-report-dialog.component.html',
  styleUrls: ['./edit-report-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditReportDialogComponent implements OnInit {

  title = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<EditReportDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

  /**
   * Method for closing the dialog
   */
  onCloseClick(): void {
    this.dialogRef.close();
  }

}
