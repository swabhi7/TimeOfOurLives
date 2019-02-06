import { Component, OnInit } from '@angular/core';
import {Memory} from '../../models/Memory';
import {MemoryService} from '../../services/memory.service';

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.component.html',
  styleUrls: ['./add-memory.component.css']
})
export class AddMemoryComponent implements OnInit {

  memory: Memory = {
    _id: null,
    caption: '',
    imagePath: '',
    date: null,
    addedBy: ''
  };

  constructor(private memoryService: MemoryService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.memoryService.addMemory(this.memory);
  }

}
