import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() code: string | undefined;
  @Output() addedEvent = new EventEmitter<Array<any>>();

  public candiesAdded:Array<any> = []
  public candies:any = [
    //{name_prod:"Duvalin",price:40,category:"Dulce",image:"is an url image",_id:"0",added:false},
  ]
  constructor(private _home: HomeService) { }

  ngOnInit() {
    this.getCandies()
  }

  getCandies = () =>{
    this._home.getCandies().subscribe((res:any)=>{
      //console.log(res)
      this.candies = res
    })
  }

  AddToShoppingCar = (candy:Object)=>{
    this.candiesAdded.push(candy)
    this.sendCandies()
  }

  sendCandies() {
    this.addedEvent.emit(this.candiesAdded)
  }

}
