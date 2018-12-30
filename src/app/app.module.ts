import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconModule, 
  MatButtonModule,
  MatToolbarModule, 
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateReportDialogComponent } from './create-report-dialog/create-report-dialog.component';
import { PivotTableComponent } from './pivot-table/pivot-table.component';
import { EditReportDialogComponent } from './edit-report-dialog/edit-report-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateReportDialogComponent,
    PivotTableComponent,
    EditReportDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    FlexLayoutModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateReportDialogComponent, EditReportDialogComponent]
})
export class AppModule { }
