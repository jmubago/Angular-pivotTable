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
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateReportDialogComponent } from './create-report-dialog/create-report-dialog.component';
import { PivotTableComponent } from './pivot-table/pivot-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateReportDialogComponent,
    PivotTableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
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
  entryComponents: [CreateReportDialogComponent]
})
export class AppModule { }
