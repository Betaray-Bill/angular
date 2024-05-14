import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { User } from '../model/user';
import { JokesComponent } from './components/jokes/jokes.component';
import { HeaderComponent } from './todoapp/header/header.component';
import { SidebarComponent } from './todoapp/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CounterComponent, CommonModule, FormComponent, UserProfileComponent, JokesComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'one way binding';
  name=""
  app="Meowww"
  count = 0;
  num1:number=0
  num2:number=0
  max:number=0
  clickMe(){
    this.count++
  }

  getMax(a:number, b:number):number{
    this.max = Math.max(a,b)
    return this.max
  } 
  value:string = ""
  value1=''
  handleInput(event:any){
    this.value = (event.target as HTMLInputElement).value
  }

  movies = [
    {"id":1,"image":"assets/images/products/image1.jpg","name":"Black Hoodie","price":"24","rating":5},
    {"id":2,"name":"Branded Shoes","image":"assets/images/products/image2.jpg","price":"13.5","rating":4},
    {"id":3,"image":"assets/images/products/image3.jpg","name":"White","price":"85.0","rating":3},
    {"id":4,"image":"assets/images/products/image4.jpg","name":"Gray Dress 1","price":"625","rating":3},
    {"id":5,"name":"Black T-Shirt (Mens)","image":"assets/images/products/image5.jpg","price":"55.0","rating":5},
    {"id":6,"name":"Jeans Jacket","image":"assets/images/products/image6.jpg","price":"115.0","rating":4},
    {"id":7,"name":"Black T-Shirt (Womens)","image":"assets/images/products/image7.jpg","price":"25.0","rating":3},
    {"id":8,"name":"Beige Trench Coat","image":"assets/images/products/image8.jpg","price":"52.0","rating":1},
    {"id":9,"name":"Stylish Shoes","image":"assets/images/products/image9.jpg","price":"32.0","rating":2},
    {"id":10,"name":"Stylish Shoes - B","image":"assets/images/products/image10.jpg","price":"55.0","rating":5},
    {"id":11,"name":"Beanie Black","image":"assets/images/products/image11.jpg","price":"15.0","rating":1},
    {"id":12,"name":"Beanie Orange","image":"assets/images/products/image12.jpg","price":"12.5","rating":2},
    {"id":13,"name":"Beanie Red","image":"assets/images/products/image13.jpg","price":"14.5","rating":4},
    {"id":15,"name":"Cyan Long Sleeve Shirt","image":"assets/images/products/image15.jpg","price":"15.5","rating":5},
    {"id":16,"name":"Yellow Raincoat","image":"assets/images/products/image16.jpg","price":"12.5","rating":3}
  ]

  show=true
  enabledRed=false
  changeColor:string="black"

  user =[
      {
        name:"ramesh",
        salary:10000,
        isSingle:false
      },
      {
        name:"suresh",
        salary:50000,
        isSingle:true
      },
      {
        name:"mani",
        salary:100,
        isSingle:false
      },
    ]

  receiveData(e:User){
      console.log(e) 
      const userIndex = this.user.findIndex(u => u.name === e.name);
      this.user[userIndex].salary = e.salary
  }
  date = new Date()
  case="Hello World"


  // View CHild
  @ViewChild("heading") heading?:ElementRef



  // JOKES

}
 