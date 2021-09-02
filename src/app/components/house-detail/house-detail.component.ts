import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Casa } from 'src/app/interfaces/casa.interface';
import { CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  miCasa: Casa | undefined;

  constructor(private activatedRoute: ActivatedRoute, 
    private casasService: CasasService) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params.idhouse)
      this.miCasa = this.casasService.getById(id);
    })
  }

}
