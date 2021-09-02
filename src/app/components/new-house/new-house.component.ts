import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {

  constructor(private casasService: CasasService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(pForm: any){
    const casa = pForm.value;
    casa.disponiblidad = true;

    const message = await this.casasService.create(casa);
    console.log(message);
    if(message.success)
    {
      this.router.navigate(['/home']);
    }
  }

}
