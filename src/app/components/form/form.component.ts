import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ListComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  car:string[]=[] 
  carname:string = ""
  suma:string=""
  addCar(){
    this.car.push(this.carname)
    this.carname = ""
  }
}
