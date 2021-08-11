import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubDataComponent } from './sub-data/sub-data.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'cityName/:city',component:SubDataComponent},
{path:'cityName',component:SubDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
