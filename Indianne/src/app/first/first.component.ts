import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

height: number = 40;
  constructor() { }
  num1: number = 10;
  num2: number = 20;
  resultat: number;
 
  ngOnInit() {}

 add(){
   this.resultat = this.num1 + this.num2;
 }
 save(){
   console.log("Template Alseny Driven form is working");
 }

}
