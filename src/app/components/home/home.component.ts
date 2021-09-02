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

  constructor(private casasService: CasasService) { 
  }

  ngOnInit() {
    this.arrCasas = this.casasService.getAll();
  }

}
