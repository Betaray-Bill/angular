import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnChanges, OnDestroy{
  // @Input => Parent - Child
  @Input('carsInput') car:string[] = []
  @Input('sumatext') sumada:string = ""

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("NG ONCHANGES - Called", changes)
  }

  ngOnDestroy(): void {
    
  }
}
 