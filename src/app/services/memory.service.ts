import { Injectable } from '@angular/core';
import {Memory} from '../models/Memory';
import {Observable} from 'rxjs';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  memories: Memory[] = [];

  constructor() { }

  getMemories(): Observable<Memory[]>{
    return of(this.memories);
  }

  addMemory(memory: Memory){
    this.memories.unshift(memory);
  }
}
