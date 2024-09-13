import { Component, EventEmitter } from '@angular/core';
import { Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileItem } from '../../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { FileType } from '../../../models/file.item.model';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-list-files',
  standalone: true,
  imports: [FormsModule, CommonModule, SweetAlert2Module],
  templateUrl: './list-files.component.html',
  styleUrl: './list-files.component.css'
})
export class ListFilesComponent {

  @Output() pageState = new EventEmitter<boolean>();
  @Input() filesList: FileItem[] = [];
  selectedFiles: FileItem[] = [];

  FileType = FileType;
  sendPageState() {
    this.pageState.emit(true)
  }

  selectFile(file: FileItem) {
    if (this.selectedFiles.includes(file)) {
      this.selectedFiles = this.selectedFiles.filter((f) => f !== file);

    }
    else {
      this.selectedFiles.push(file);
    }
    console.log(this.selectedFiles);
  }

  deleteItem(file: FileItem) {
    this.filesList = this.filesList.filter((f) => f !== file);
  }
  deleteItems() {
    if(this.selectedFiles.length<1){
      alert("No se encuentran seleccionados archivos")
    }

    if (this.selectedFiles.length == 1) {
      this.deleteItem(this.selectedFiles[0]);
      this.selectedFiles = [];
    }
    if (this.selectedFiles.length > 1) {
      if (confirm('¿Desea borrar los archivos seleccionados?')) {
        this.selectedFiles.forEach((item) => {
          this.deleteItem(item);
        });
        this.selectedFiles = [];
      }
    }
  }
}
