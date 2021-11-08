import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    CalendarModule,    
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
