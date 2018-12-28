import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-report-dialog',
  templateUrl: './create-report-dialog.component.html',
  styleUrls: ['./create-report-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateReportDialogComponent implements OnInit {

  titulo = new FormControl('', [Validators.required]);
  descripcion = new FormControl('', [Validators.required]);
  visibilidad = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<CreateReportDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void { }


  /**
   * Method for closing the dialog
   */
  onCloseClick(): void {
    this.dialogRef.close();
  }

}
