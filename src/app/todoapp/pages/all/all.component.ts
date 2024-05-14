import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { tasks } from '../../../../model/user';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit{
  newtask=""
  tasks:tasks[]=[]
  date = new Date()
  constructor(private taskService: HttpService){

  }

  ngOnInit(): void {
    this.getTasks()
  }


  getTasks(){
    this.taskService.getTask().subscribe((e:any) => {
      console.log(e)
      this.tasks=e
    })
  }

  addtask(){
    this.taskService.addtask(this.newtask).subscribe(() => {
      console.log("addesd");
      this.getTasks()
    })
    this.newtask=""
  }

  important(task:tasks){
    console.log(task)
    task.imp=!task.imp
    this.taskService.updateTask(task).subscribe(()=>{
      console.log("object");
      this.getTasks()
    })
  }


}
