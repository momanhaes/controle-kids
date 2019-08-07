import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriancasRoutingModule } from './criancas-routing.module';
import { CriancasService } from './criancas.service';
import { CriancasListResolver } from './criancas-list/criancas-list.resolver';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CriancasRoutingModule
  ],
  providers: [
    CriancasService,
    CriancasListResolver
  ]
})
export class CriancasModule { }
