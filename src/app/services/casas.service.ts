import { Injectable } from '@angular/core';
import { Casa } from '../interfaces/casa.interface';
import { HOUSES } from './house.db';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  id: number = 5;

  arrCasas: Casa[] = [];


  constructor() { 
    this.arrCasas = HOUSES;
  }

  getAll(){
    return HOUSES;
  }

  getById(pId: number): Casa | undefined { 
    return HOUSES.find(casa => casa.id === pId);
  }

  create(pHouse: Casa): string {
    pHouse.id = this.id;
    this.arrCasas.push(pHouse);
    this.id++;
    console.log(this.arrCasas);
    return 'success';
  }
}
