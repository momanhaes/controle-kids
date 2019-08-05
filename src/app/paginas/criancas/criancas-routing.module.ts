import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriancasFormComponent } from './criancas-form/criancas-form.component';
import { CriancasListComponent } from './criancas-list/criancas-list.component';

const routes: Routes = [
  { path: '', component: CriancasListComponent },
  { path: 'cadastrar', component: CriancasFormComponent }
];

const pages = [CriancasFormComponent, CriancasListComponent];

const declarations = [...pages];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations
})
export class CriancasRoutingModule { }
