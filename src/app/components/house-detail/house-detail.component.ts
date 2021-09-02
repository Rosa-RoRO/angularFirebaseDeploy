import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { Casa } from 'src/app/interfaces/casa.interface';
import { CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  miCasa: any | undefined;

  constructor(private activatedRoute: ActivatedRoute, 
    private casasService: CasasService) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      const result = this.casasService.getById(params.idhouse);
      result.subscribe(data => this.miCasa = data); 
    })

  }

}
