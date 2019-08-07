import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const components = [HeaderComponent];

const declarations = [...components];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  ],
  declarations,
  exports: declarations
})
export class ComponentsModule { }
