import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriancasFormComponent } from './criancas-form/criancas-form.component';
import { CriancasListComponent } from './criancas-list/criancas-list.component';
import { CriancasListResolver } from './criancas-list/criancas-list.resolver';
import { SharedModule } from 'src/app/shared/shared.module';
import { menu } from 'src/app/shared/model/menu';

// resolve: { data: CriancasListResolver }

const routes: Routes = [
  { path: '', component: CriancasListComponent, data: {menu: menu.lista}, resolve: { data: CriancasListResolver }},
  { path: 'cadastrar', component: CriancasFormComponent, data: {menu: menu.formulario} }
];

const pages = [CriancasFormComponent, CriancasListComponent];

const declarations = [...pages];

const providers = [];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule],
  declarations
})
export class CriancasRoutingModule { }
