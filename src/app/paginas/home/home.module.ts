import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CriancasService } from '../criancas/criancas.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [CriancasService]
})
export class HomeModule { }
