import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/Forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WallComponent } from './components/wall/wall.component';
import { AddMemoryComponent } from './components/add-memory/add-memory.component';
import { EditMemoryComponent } from './components/edit-memory/edit-memory.component';

import {MemoryService} from './services/memory.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    WallComponent,
    AddMemoryComponent,
    EditMemoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MemoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
