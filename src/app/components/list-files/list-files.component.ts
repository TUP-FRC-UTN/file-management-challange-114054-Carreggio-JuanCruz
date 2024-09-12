import { Component, EventEmitter } from '@angular/core';
import { Output , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileItem } from '../../../models/file.item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-files',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-files.component.html',
  styleUrl: './list-files.component.css'
})
export class ListFilesComponent {

  @Output() pageState = new EventEmitter<boolean>();
  @Input() filesList : FileItem[]=[];
  sendPageState(){
    this.pageState.emit(true)
  }
}
