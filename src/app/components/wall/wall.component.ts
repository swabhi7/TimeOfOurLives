import { Component, OnInit } from '@angular/core';
import {Memory} from '../../models/Memory';
import {MemoryService} from '../../services/memory.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  memories: Memory[] = [];

  constructor(private memoryService: MemoryService) { }

  ngOnInit() {
    this.memoryService.getMemories().subscribe(memories => {
      this.memories = memories;
    });
  }

}
