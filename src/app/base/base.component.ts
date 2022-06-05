import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  public categories = [
    {name: "Inicio", active: "active", code:"all"},
    {name: "Salados", active: "inactive", code:"salt"},
    {name: "Dulces", active: "inactive", code:"sweet"},
    {name: "Agridulces", active: "inactive", code:"bittersweet"},
  ]
  public total:number = 0;
  public candiesAdded:Array<any> = [];
  public codeToSearch = 'all';
  public admin : boolean = true;
  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  changeRole(){
    this.admin = !this.admin;
    this._cd.detectChanges ();
  }

  receiveCandies($event: any) {
    this.candiesAdded = $event
  }

}
