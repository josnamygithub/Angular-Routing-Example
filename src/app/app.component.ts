import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingApplication';
  NameFromParent:string = '';

  //start parent to child
  nameTochild:string = ' ';
  //end

  //child to parent
  childtoparent:string =''

  onchildnameChnage(event:string):void{
    this.childtoparent =event;
  }
  //end

  //routing 

  //parameter passthorugh the url and dispaying to that component

    name:string ='';
    age:number=0;
  
 constructor(private router:Router){
 // from angular router
 }
  onchild1Buttonclicked(){
    this.router.navigateByUrl('child1');
    }
    onchild2Buttonclicked(){
      this.router.navigate(['/child2', this.age, this.name]);      }
  }