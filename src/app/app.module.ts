import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { CriancasListComponent } from './paginas/criancas-list/criancas-list.component';
import { CriancasFormComponent } from './paginas/criancas-form/criancas-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CriancasListComponent,
    CriancasFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
