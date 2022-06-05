import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() code: string | undefined;
  @Output() addedEvent = new EventEmitter<Array<any>>();

  public candiesAdded:Array<any> = [
    //{name:"Duvalin",price:40,category:"Dulce",image:"is an url image",_id:"0",added:false},
  ]
  public candies = [
    {name:"Duvalin",price:40,category:"Dulce",image:"is an url image",_id:"0",added:false},
  ]
  constructor() { }

  ngOnInit() {
  }

  AddToShoppingCar = (candy:Object)=>{
    this.candiesAdded.push(candy)
    this.sendCandies()
  }

  sendCandies() {
    this.addedEvent.emit(this.candiesAdded)
  }

}
