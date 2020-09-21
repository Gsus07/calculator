import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaComponent } from './resta/resta.component';
import { SumaComponent } from './suma/suma.component';

const routes: Routes = [{path:"Resta",component:RestaComponent},
{path:"Home",component:HomeComponent},{path:"Suma",component:SumaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
