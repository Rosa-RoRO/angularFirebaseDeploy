import { Component, Input, OnInit } from '@angular/core';
import { Casa } from 'src/app/interfaces/casa.interface';

@Component({
  selector: 'app-card-house',
  templateUrl: './card-house.component.html',
  styleUrls: ['./card-house.component.css']
})
export class CardHouseComponent implements OnInit {

  @Input() casa: Casa | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
