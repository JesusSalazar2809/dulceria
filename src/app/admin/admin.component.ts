import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public categories = [
    {name: "Salados", active: "inactive"},
    {name: "Dulces", active: "inactive"},
    {name: "Agridulces", active: "inactive"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
