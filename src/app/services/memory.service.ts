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

  constructor(private http: HttpClient) { }

  getMemories(): Observable<any>{
    return this.http.get('http://localhost:3000/api/memories');
  }

  addMemory(memory: Memory){
    this.memories.unshift(memory);
  }
}
