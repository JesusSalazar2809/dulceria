import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { CandyService } from './candy.service';
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
  public images:any = [];
  candyForm = new FormGroup({
    name_prod: new FormControl(''),
    categorie: new FormControl(''),
    price: new FormControl(0),
  });

  constructor(private _candy: CandyService) { }

  ngOnInit() {
  }
  onSubmit() {
    const data:any = new FormData();
    if(this.images.length < 0){ 
      Swal.fire(
        'Error',
        'Es necesario subir una imagen',
        'error'
      )
      return false;
    }
    for(let key in this.candyForm) {
      data.append(key, JSON.stringify( this.candyForm.get(key) ))
    }
   for(let file of this.images){
      data.append('image', file)
   }
    this._candy.addCandy(data).subscribe((res:any)=>{
      Swal.fire(
        'Todo salio perfecto!',
        res.data.success,
        'success'
      )
    })
  }

  addImage(e:any){
    const file = e.target.files[0];
    this.images.push(file);
  }
}
