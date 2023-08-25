import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  }
  // member section

  services = [
    {id: 1, name:"Bagni parco lambro", category:"Bagni", position:"via lambrate 23, Milano", cost:"free" },
    {id: 2, name:"Docce naviglio grande", category:"Docce", position:"via del naviglio grande 12, Milano", cost:"2" },
    {id: 3, name:"Bagni naviglio grande nord", category:"bagni", position:"via del naviglio grande 100, Milano", cost:"1" },
  ];

  selectedService?: any;

  // END member section

  // method section

   onSelectService(service: any) :void {
    this.selectedService = service;
  }

  onDelete(service: any){
    this.services = this.services.filter(serv => serv.id != service.id)
  }


  // END method section


}


