import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/service/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bikeServ:BikeService) { }

  ngOnInit() {
  }

}
