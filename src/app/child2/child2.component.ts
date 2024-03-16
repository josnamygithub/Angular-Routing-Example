import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  parentAge:number =0;
  parentName:string='';
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    this.parentAge=this.route.snapshot.params['age'];
    this.parentName=this.route.snapshot.params['name'];
  }

}
