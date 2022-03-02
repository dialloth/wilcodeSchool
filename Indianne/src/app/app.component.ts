import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Indianne';
  birthday = new Date(1988, 3, 15);
 

   model = {
    left: true,
    middle: false,
    right: false
  };

  execute: boolean = false;
   data: any;
   ngOnInit(): void {
   this.data = this.getData();
   }
  getData(){
  this.execute = true;
   return [
   {
   "nom":"Diallo",
   "prenom":"Thierno",
   "age":"32"
   },
    {
   "nom":"Barry",
   "prenom":"Mamadou",
   "age":"35"
   },
    {
   "nom":"Balde",
   "prenom":"Moussa",
   "age":"33"
   }
   ]
  }
}
