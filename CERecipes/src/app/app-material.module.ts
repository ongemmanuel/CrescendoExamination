import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatDialogModule, MatSortModule,
  MatTableModule, MatSelectModule,
  MatOptionModule, MatButtonModule,
  MatCheckboxModule, MatToolbarModule,
  MatListModule, MatSidenavModule,
  MatCardModule, MatTabsModule,
  MatIconModule, MatTreeModule, MatMenuModule,
  MatExpansionModule, MatRadioModule, MatSnackBarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatTreeModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  exports: [
    MatExpansionModule,
    MatTreeModule,
    MatTabsModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatMenuModule
  ]
})
export class AppMaterialModule { }