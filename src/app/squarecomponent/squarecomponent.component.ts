import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-squarecomponent',
  templateUrl: './squarecomponent.component.html',
  styleUrls: ['./squarecomponent.component.css']
})
export class SquarecomponentComponent  {
 

  @Input() value: 'X' | 'O';
 
  constructor() { 
    
  }

 

}
