import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    let usuario = new Usuario();

  }

  date1?: Date;
  date2?: Date;
  date9: Date = new Date;
  date10: string = '';
}
