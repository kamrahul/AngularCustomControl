import { Component, OnInit,forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxInputComponent),
      multi: true
    }
  ]
})
export class CheckboxInputComponent implements OnInit,ControlValueAccessor {
 
  name: FormGroup;
  constructor(fb: FormBuilder) {
    this.name = fb.group({
      firstName:[''],
      lastName: ['']
    });
  }

 
  writeValue(value: any): void {
    if(value) {
      this.name.setValue(value);
  }
  }
  registerOnChange(fn: any): void {
    this.name.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
   console.log("Touched")
  }


  ngOnInit(): void {


  }

}
