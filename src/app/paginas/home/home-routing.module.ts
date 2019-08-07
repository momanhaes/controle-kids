import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { menu } from 'src/app/shared/model/menu';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { menu: menu.home } }
];

const pages = [HomeComponent];

const declarations = [...pages];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule],
  declarations
})
export class HomeRoutingModule { }
