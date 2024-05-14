import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit, OnChanges{
  joke="loading..."
  cat:string="dev"
  constructor(private jokeservice:JokeService){

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges", changes)
  }
  ngOnInit(){ //called after constructor and after component's inputs are initiated
    console.log("Meow")
    this.getJokes() 
  }

  getJokes(){
    this.joke = "loading...."
    if(this.cat !== ""){
      this.jokeservice.getJoke(this.cat).subscribe((data:any) => {
        console.log(data)
        this.joke = data.value
      })
    }
  }

}
