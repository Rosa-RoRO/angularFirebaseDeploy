import { Injectable } from '@angular/core';
import { Casa } from '../interfaces/casa.interface';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  arrHouses: Casa[];


  constructor() { 
    this.arrHouses = [{
      id: 1,
      titulo: "Bonita casa adosada",
      propietario: "Don Ramiro",
      direccion: "Calle del Almendro 18, 18291",
      ciudad: 'Madrid',
      numerohabitaciones: 3,
      lat: 182912,
      long: 1289712,
      disponibilidad: true,
      foto: ""
    }]
  }
}
