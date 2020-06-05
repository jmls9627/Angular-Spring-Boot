import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/service/bike.service';
import{FormControl,FormGroup,Validators} from "@angular/forms"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[]=[
    'Globo MTB 29 Full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade',
];
   bikeForm: FormGroup;
   validMessage: string="";

  constructor(private bikeServ:BikeService) { }

  ngOnInit() {
    this.bikeForm=new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      model: new FormControl('',Validators.required),
      serialNumber: new FormControl('',Validators.required),
      purchasePrice: new FormControl('',Validators.required),
      purchaseDate: new FormControl('',Validators.required),
      contact: new FormControl()
      
    });
  }

}
