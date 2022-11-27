import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'order-app';

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm() {
    return new FormGroup({
      name: new FormControl(''),
      white_wine: new FormControl(0),
      red_wine: new FormControl(0),
      beer: new FormControl(0),
      test: new FormControl()
    });
  }

}
