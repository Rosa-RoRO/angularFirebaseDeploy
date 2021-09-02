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

  onSubmit(pForm: any){
    const casa = pForm.value;
    casa.disponiblidad = true;

    const message = this.casasService.create(casa);
    if(message === 'success')
    {
      this.router.navigate(['/home']);
    }
  }

}
