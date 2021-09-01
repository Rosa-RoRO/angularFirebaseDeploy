import { Injectable } from '@angular/core';
import { Casa } from '../interfaces/casa.interface';
import { HOUSES } from './house.db';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  arrCasas: Casa[] = [];


  constructor() { 
    this.arrCasas = HOUSES;
  }

  getAll(){
    return HOUSES;
  }
}
