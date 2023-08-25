import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit{

  constructor(private router :Router) {}

  ngOnInit(): void {
  }



//member region
 model = {id: null, name: null, category: null, position: null, cost: null};

//END member region

//methods region
onSubmit() :void{
  if(this.model.id){

  }
  else{

  }

  this.router.navigate(["/"])
}




//END methods region



}
