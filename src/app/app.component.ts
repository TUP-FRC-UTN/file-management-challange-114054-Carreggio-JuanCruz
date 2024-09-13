import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem, FileType } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { FormFileComponent } from './components/form-file/form-file.component';
import { ListFilesComponent } from './components/list-files/list-files.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormFileComponent, ListFilesComponent, SweetAlert2Module],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
  formPage:boolean = true;

  changeState(estado:boolean){
    this.formPage = estado;
  }
  saveFile(file : FileItem){
    this.files.push(file);
  }
}
