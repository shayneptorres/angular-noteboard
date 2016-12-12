import { Component, OnInit } from '@angular/core';
import '../../../public/css/styles.css';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-noteCard',
  templateUrl: './noteCard.component.html',
  styleUrls: ['./noteCard.component.css']
})

export class NoteCardComponent implements OnInit { 
    public noteForm: FormGroup;
    mode = "displaying"
    testValue = "displaying"
    noteFormInput = ""

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.noteForm = this._fb.group({
            note: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        });
    }

    save(value: string){
        console.log(value)
       this.testValue = value
    }

    setMode(){
        if (this.mode === "displaying"){
            this.mode = "editing"
            this.testValue = "editing"
        } else {
            this.mode = "displaying"
            this.testValue = "displaying"
        }
    }
}