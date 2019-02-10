import { Injectable } from '@angular/core';
import {Memory} from '../models/Memory';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  memories: Memory[] = [];

  private memoriesUpdated = new Subject<Memory[]>();

  constructor(private http: HttpClient) { }

  getMemories() {
    this.http.get<{message: string, memories: Memory[]}>('http://localhost:3000/api/memories').subscribe(result => {
      this.memories = result.memories;
      this.memoriesUpdated.next([...this.memories]);
    });
  }

  getMemoriesUpdated(){
    return this.memoriesUpdated.asObservable();
  }

  addMemory(caption: string, image: File){

    const memoryData = new FormData();
    memoryData.append('caption', caption);
    memoryData.append('image', image, '' + Date.now());
    this.http.post<{message: string, memory: Memory}>('http://localhost:3000/api/memories', memoryData).subscribe(result => {
      console.log(result);
      const memory = {
        _id: result.memory._id,
        caption: result.memory.caption,
        imagePath: result.memory.imagePath,
        date: result.memory.date,
        addedBy: result.memory.addedBy
      };
      this.memories.unshift(memory);
      this.memoriesUpdated.next([...this.memories]);
    });
    
  }
}
