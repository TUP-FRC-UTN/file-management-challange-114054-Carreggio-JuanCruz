import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../../models/file.item.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OWNERS } from 'C:/repos/prog4/file-management-challange-114054-Carreggio-JuanCruz/src/data/file.storage';

@Component({
  selector: 'app-form-file',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-file.component.html',
  styleUrl: './form-file.component.css'
})
export class FormFileComponent {
  itemArchivo:FileItem = {
    id:" ",
    name:"",
    creation: undefined,
    owners:[],
    type:FileType.FILE,
    parentId:""
  };
  filesTypes =  Object.keys(FileType).filter(key => isNaN(Number(key)));
  @Input() existingFiles : FileItem[] = [];
  existingOwners : FileOwner[] = OWNERS;
  selectedOwner : FileOwner = {
    avatarUrl: '',
    name: ''
  }
  @Output() pageState=new EventEmitter<boolean>();
  @Output() formOutgoing = new EventEmitter<FileItem>();

  existingFolders : FileItem[] = this.existingFiles.filter((f)=> f.type === FileType.FOLDER);


  addOwner(owner : FileOwner){
    if(!this.itemArchivo.owners.includes(owner)){
      this.itemArchivo.owners.push(owner);
      
      this.selectedOwner = {
        avatarUrl: '',
        name: ''
      }
    }
    
  }
  removeOwner(owner:FileOwner){
    if(this.itemArchivo.owners.includes(owner)){
      this.itemArchivo.owners.splice(this.itemArchivo.owners.indexOf(owner),1);
    }
  }

  sendPageState(){
    this.pageState.emit(false)
  }

  sendForm(form:NgForm){
    
    if(form.valid){
      this.formOutgoing.emit(form.value);
      console.log(form.value);
      this.sendPageState();
      
    }
  
  }

 



}
