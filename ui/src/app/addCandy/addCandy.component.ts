import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addCandy',
  templateUrl: './addCandy.component.html',
  styleUrls: ['./addCandy.component.scss']
})
export class AddCandyComponent implements OnInit {
  public categories = [
    {name: "Salados", active: "inactive"},
    {name: "Dulces", active: "inactive"},
    {name: "Agridulces", active: "inactive"},
  ]
  candyForm = new FormGroup({
    name_prod: new FormControl(''),
    categorie: new FormControl(''),
    price: new FormControl(0),
    image: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.candyForm.value);
  }
}
