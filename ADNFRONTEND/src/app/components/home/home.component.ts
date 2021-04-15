import { Component, OnInit } from '@angular/core';
import { ADNServicesService } from 'src/app/services/adnservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ] 
})
export class HomeComponent implements OnInit {

  dnaData:any = [];
  dnaStatus:any = {};

  constructor(private adnService:ADNServicesService) {

    
    this.getDataAdn();
    this.getStatus();

   }

  ngOnInit(): void {

  }


  getDataAdn(){

    this.adnService.getAdn().subscribe((params:any) => {
      this.dnaData = params;
      console.log(params);
    });


  }


  getStatus(){
    this.adnService.getStatus().subscribe((params:any) =>{
      this.dnaStatus = params;
      console.log(this.dnaStatus);
    })
  }

}
