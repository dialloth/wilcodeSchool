import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherComponent } from './another/another.component';
import { FirstComponent } from './first/first.component';


const routes: Routes = [
    {path: 'another', component: AnotherComponent },
    {path: 'first', component: FirstComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
