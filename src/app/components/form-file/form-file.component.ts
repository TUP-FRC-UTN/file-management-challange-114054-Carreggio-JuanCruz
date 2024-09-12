import { Component, EventEmitter, Output } from '@angular/core';
import { FileItem, FileType } from '../../../models/file.item.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-file',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-file.component.html',
  styleUrl: './form-file.component.css'
})
export class FormFileComponent {
  itemArchivo:FileItem = {
    id:" ",
    name:"",
    creation:new Date(),
    owners:[],
    type:FileType.FILE,
    parentId:""
  };
  filesTypes =  Object.keys(FileType).filter(key => isNaN(Number(key)));
  @Output() pageState=new EventEmitter<boolean>();

  sendPageState(){
    this.pageState.emit(false)
  }

  sendForm(form:NgForm){
    console.log(this.itemArchivo);
  }

 



}
