import { Component, Input, OnInit } from '@angular/core';
import { Casa } from 'src/app/interfaces/casa.interface';
import { CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-card-house',
  templateUrl: './card-house.component.html',
  styleUrls: ['./card-house.component.css']
})
export class CardHouseComponent implements OnInit {

  @Input() casa: Casa | undefined;

  constructor( private casasService: CasasService ) { }

  ngOnInit(): void {
  }

  async onDelete(pId: string | undefined ) {
    if(pId) {
      const response = await this.casasService.delete(pId);
      if(response.success){
        alert('Casa borrada correctamente');
      }
    }
  }

}
