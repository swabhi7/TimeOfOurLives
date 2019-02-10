import { Component, OnInit } from '@angular/core';
import {Memory} from '../../models/Memory';
import {MemoryService} from '../../services/memory.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {mimeType} from './mime-type.validator';

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.component.html',
  styleUrls: ['./add-memory.component.css']
})
export class AddMemoryComponent implements OnInit {

  form: FormGroup;
  imagePreview: string;

  constructor(private memoryService: MemoryService) { }

  ngOnInit() {
    this.form = new FormGroup({
      caption: new FormControl(null, {validators: []}),
      image: new FormControl(null, {validators: [], asyncValidators: [mimeType]})
    });
  }

  onImagePicked(event: Event){

    

    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = '' + reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSubmit(){
    this.memoryService.addMemory(this.form.value.caption, this.form.value.image);
    this.form.reset();
  }

}
