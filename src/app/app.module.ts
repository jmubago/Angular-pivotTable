import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule, 
  MatToolbarModule, 
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateReportDialogComponent]
})
export class AppModule { }
