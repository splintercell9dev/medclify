export class FileDetail {
    fileName: string ;
    fileSize: string ;
    fileType: string ;
    private units = [
        'bytes',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB'
    ] ;
    constructor(name: string, size: number, type: string){
        this.fileName = name ;
        this.fileSize = this.transform(size) ;
        this.fileType = type ;
    }

    private transform(size: number = 0): string{
        let unit = 0 ;

        while (size >= 1024){
            size /= 1024 ;
            unit++ ;
        }

        return `${size.toFixed(2)} ${this.units[unit]}` ;
    }
}
