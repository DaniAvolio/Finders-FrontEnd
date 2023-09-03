import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private serviceService: ServiceService) {}

  // member section

  services: any

  selectedService?: any;

  // END member section

  // method section


  ngOnInit(): void {
    this.serviceService.getListOfServices().
    subscribe({
      next: s => this.services = s.data,
      error: e => console.log(e)
    });
  }

   onSelectService(service: any) :void {
    this.selectedService = service;
  }

  onDelete(service: any): void{
    this.serviceService.deleteService(service.id).
    subscribe({
      next: s => this.ngOnInit(),
      error: e => console.log(e)
    });
  }


  // END method section


}


