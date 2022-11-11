import { Component, OnInit,Input ,forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ]
})
export class CounterInputComponent implements OnInit,ControlValueAccessor {

  @Input() min: number;
  @Input() max: number;

  value = 0;

  onChange: any = () => { };
  onTouched: any = () => { };
  disabled: boolean;
  constructor() { }
 


  ngOnInit(): void {
  }


  increase() {
    if (typeof this.max === 'undefined') {
      this.value++;
      console.log("pt0")
      this.onChange(this.value);
    } else if (this.value < this.max) {
      this.value++;
      this.onChange(this.value);
    }
  }

  decrease() {
    if (typeof this.min === 'undefined') {
      this.value--;
      this.onChange(this.value);
    } else if (this.value > this.min) {
      this.value--;
      this.onChange(this.value);
    }
  }




  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    console.log('Pt1')
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
