import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { CheckboxInputComponent } from './components/checkbox-input/checkbox-input.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterInputComponent,
    CheckboxInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
