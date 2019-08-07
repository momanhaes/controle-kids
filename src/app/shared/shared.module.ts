import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  providers: [
  ],
  exports: [
    ComponentsModule
  ]
})
export class SharedModule { }
