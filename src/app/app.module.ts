import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NoteCardComponent } from './noteCard/noteCard.component'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    NoteCardComponent
    
  ],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
