import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { MatToolbarModule } from '@angular/material/toolbar' ;
import { MatIconModule } from '@angular/material/icon' ;
import { MatButtonModule } from '@angular/material/button' ;
import { MatMenuModule } from '@angular/material/menu' ;
import { MatTooltipModule } from '@angular/material/tooltip' ;
import { MatSlideToggleModule } from '@angular/material/slide-toggle' ;
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MatTableModule } from '@angular/material/table' ;
import { UploadDialogComponent } from '@shared/components/upload-dialog/upload-dialog.component';
import { ResultDialogComponent } from '@shared/components/result-dialog/result-dialog.component';
import { CheckNullModule } from '@shared/check-null/check-null.module';

@NgModule({
  declarations: [NavComponent, UploadDialogComponent, ResultDialogComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatSlideToggleModule,
    FormsModule,
    FlexLayoutModule,
    MatDialogModule,
    NgxFileDropModule,
    MatTableModule,
    CheckNullModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
