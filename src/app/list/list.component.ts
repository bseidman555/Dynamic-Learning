import { Component, OnInit } from '@angular/core';
import { listService} from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: `./list.component.html`,
  styleUrls: ['./list.component.css']
})
export class listComponent implements OnInit {
  title = "types list";
  types;
  
  
  constructor(service: listService) { 
    
    this.types = service.getlist();

    
  }
   email = "email@email.com";

   onKeyUp(){
      console.log(this.email);
   }


   onDivClick(){
     console.log("This should appear second")
   }

  onPoo($event) {
   
   console.log("you tickled my button"), $event;

  }

  ngOnInit() {
    
  }

}
