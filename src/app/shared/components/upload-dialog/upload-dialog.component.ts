import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FileDetail } from '@core/model/file-detail';
import { FileSystemEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {

  private files: NgxFileDropEntry[] = [] ;
  showFileDrop = true ;
  imgUrl!: string | ArrayBuffer | null;
  fileDetail!: FileDetail;
  responseData!: File;
  constructor(private dialogRef: MatDialogRef<UploadDialogComponent>) {}

  fileDropped(files: NgxFileDropEntry[]): void{
    this.files = files ;
    if (this.files.length > 0){
      const fileEntry = this.files[0].fileEntry as FileSystemFileEntry ;
      const reader = new FileReader() ;
      fileEntry.file( filedata => {
        this.responseData = filedata ;
        this.fileDetail = new FileDetail(filedata.name, filedata.size, filedata.type) ;
        reader.readAsDataURL(filedata) ;
        reader.onload = () => {
          this.imgUrl = reader.result ;
          this.showFileDrop = false ;
        } ;
      }) ;
    }
  }

  toggleFileView(): void{
    this.showFileDrop = !this.showFileDrop ;
  }

  uploadPicture(): void{
    this.dialogRef.close({
      data: this.responseData
    }) ;
  }

  ngOnInit(): void {
  }

}
