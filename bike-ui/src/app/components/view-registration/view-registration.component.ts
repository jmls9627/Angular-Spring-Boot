import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/service/bike.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg;

  constructor(private bikeServ:BikeService, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.getBikeReg(this.route.snapshot.params.id);
  }

  getBikeReg(id:number){
    this.bikeServ.getBike(id).subscribe(
      data=>{
        this.bikeReg=data; 
      },
      err=>console.error(err),
      ()=>console.log('bike loaded')
    );
  }

}
