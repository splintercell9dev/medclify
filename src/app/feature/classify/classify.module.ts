import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifyComponent } from './classify.component';
import { MatIconModule } from '@angular/material/icon' ;
import { MatTooltipModule } from '@angular/material/tooltip' ;
import { MatCardModule } from '@angular/material/card' ;
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog' ;
import { UploadDialogComponent } from '@shared/components/upload-dialog/upload-dialog.component';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [ClassifyComponent, UploadDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    NgxFileDropModule
  ],
  exports: [ClassifyComponent]
})
export class ClassifyModule { }
