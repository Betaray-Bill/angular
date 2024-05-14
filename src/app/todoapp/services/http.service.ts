import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { tasks } from '../../../model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {
    
  }
  addtask(task:string){
    return this.http.post(`http://localhost:3000/tasks`, {
      title:task
    })
  }

  getTask(){
    return this.http.get(`http://localhost:3000/tasks`)
  }

  updateTask(task:tasks){
    console.log(task.id)
    return this.http.put(`http://localhost:3000/tasks/${task.id}`, task)
  }
}
