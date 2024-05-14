import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent implements OnInit, OnDestroy, OnChanges{
  // Parent to child - @Input
  @Input("userName") name:string = ""
  @Input("salary") salary!:number 
  
  // Child to Parent - EventEmitter is used
  @Output() myEvent = new EventEmitter<User>()
  sendToParent(){
    this.myEvent.emit({name:this.name,salary:2000000});
  }

  constructor(){
    // called when the object is initialized for the calss, but the component is not ready
    // so the value is  undefined in this situation
    console.log("constructor call ", this.name ? "Asd" :  "Asdcxs" ,  " .")
  }

  ngOnChanges(changes: SimpleChanges): void {
    // called just after the constructor has been called
    // will be called again if there are any changes in the component's value
    console.log("onChange", changes)
    console.log(this.name)
  }

  ngOnInit(){
    console.log("ngOnint called ", this.name )
  }

  ngOnDestroy(): void {
    console.log("destroyed called")
  }
}
