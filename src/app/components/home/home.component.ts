import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from 'src/app/services/designutility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _designServices:DesignutilityService)  {
    this._designServices.userName.subscribe(uname =>{
      this.userName = uname
    })
   
  } 

  ngOnInit(): void {
  }
  userName;
}
