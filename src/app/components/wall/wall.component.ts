import { Component, OnInit, OnDestroy } from '@angular/core';
import {Memory} from '../../models/Memory';
import {MemoryService} from '../../services/memory.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit, OnDestroy {

  memories: Memory[] = [];
  private memoriesSub : Subscription;

  constructor(private memoryService: MemoryService) { }

  ngOnInit() {
    this.memoryService.getMemories();
    this.memoriesSub = this.memoryService.getMemoriesUpdated().subscribe(result => {
      this.memories = result;
    });
  }

  ngOnDestroy(){
    this.memoriesSub.unsubscribe();
  }

}
