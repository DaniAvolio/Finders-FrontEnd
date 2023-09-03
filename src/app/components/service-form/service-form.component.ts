import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit{

  constructor
     (private router :Router,
      private serviceService: ServiceService,
      private route: ActivatedRoute
     ){}

//member region
 model: any

//END member region

//methods region

ngOnInit(): void {
  if(this.route.snapshot.paramMap.get('id') != null)
  {
    this.serviceService.getService(this.route.snapshot.paramMap.get('id')).
    subscribe({
      next: s => this.model = s,
      error: e => console.log(e)
    });
  }
  else
  {
    this.model = {id: null, name: null, category: null, position: null, cost: null};
  }

}

onSubmit() :void{
  if(this.model.id){
    this.serviceService.updateService(this.model.id, this.model).
    subscribe({
      next: s => this.router.navigate(['/']) ,
      error: e => console.log(e)
    });
  }
  else{
    this.serviceService.createService(this.model).
    subscribe({
      next: s => this.router.navigate(['/']),
      error: e => console.log(e)
    });
  }
}




//END methods region



}
