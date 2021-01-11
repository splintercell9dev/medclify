import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FileDetail } from '@core/model/interface';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

const units = [
  'bytes',
  'KB',
  'MB',
  'GB',
  'PB'
] ;

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})

export class UploadDialogComponent implements OnInit {
  private files: NgxFileDropEntry[] = [] ;
  showFileDrop = true ;
  imgUrl!: string | ArrayBuffer | null;
  responseData!: File;
  dataSource!: FileDetail[];
  displayedColumns = ['name', 'size', 'type'] ;

  constructor(private dialogRef: MatDialogRef<UploadDialogComponent>) {}

  fileDropped(files: NgxFileDropEntry[]): void{
    this.files = files ;
    if (this.files.length > 0){
      const fileEntry = this.files[0].fileEntry as FileSystemFileEntry ;
      const reader = new FileReader() ;

      fileEntry.file( data => {
        this.responseData = data ;
        this.dataSource = [] ;
        const fileDetail = {
          name: data.name.slice(0, data.name.lastIndexOf('.')),
          type: data.type,
          size: this.transform(data.size, units)
        } ;
        this.dataSource.push(fileDetail) ;
        reader.readAsDataURL(data) ;
        reader.onload = () => {
          this.imgUrl = reader.result ;
          this.showFileDrop = false ;
        } ;
      }) ;
    }
  }

  private transform(size: number, arrUnits: string[]): string{
    let unit = 0 ;

    while (size >= 1024){
        size /= 1024 ;
        unit++ ;
    }

    return `${size.toFixed(2)} ${arrUnits[unit]}` ;
}

  toggleFileView(): void{
    this.showFileDrop = !this.showFileDrop ;
  }

  uploadPicture(): void{
    this.dialogRef.close(this.responseData) ;
  }

  ngOnInit(): void {
  }

}
