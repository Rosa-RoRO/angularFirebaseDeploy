import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Casa } from 'src/app/interfaces/casa.interface';
import { CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrCasas: Observable<any[]> = new Observable;
  latitud: number = 0;
  longitud: number = 0;

  constructor(
    private casasService: CasasService
  ) { 
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
    })
  }

  ngOnInit() {
    this.arrCasas = this.casasService.getAll();
  }

  onRightClick($event: any) {
    alert('Tocando el botón derecho del ratón');
    console.log($event);
  }

}
