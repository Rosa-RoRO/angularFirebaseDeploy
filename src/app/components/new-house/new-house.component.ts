import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {

  houseUpdate: any = {};

  constructor(
    private casasService: CasasService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.idhouse) {
        // Está actualizando
        const response = this.casasService.getById(params.idhouse);
        response.subscribe(data => {
          this.houseUpdate = data;
          console.log(this.houseUpdate);
        });
      }
    })
  }

  async onSubmit(pForm: any){
    const casa = pForm.value;
    casa.disponiblidad = true;
    let message: any;
    if(this.houseUpdate.id){
      message = await this.casasService.create(casa, this.houseUpdate.id);
    } else {
      message = await this.casasService.create(casa);
    }
    console.log(message);
    if(message.success) {
      this.router.navigate(['/home']);
    }
  }

}
