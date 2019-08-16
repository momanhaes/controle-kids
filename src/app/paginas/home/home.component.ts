import { Component, OnInit } from '@angular/core';
import { CriancasService } from '../criancas/criancas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private criancasService: CriancasService) {

  }

 async obterCriancas() {
    console.log(await this.criancasService.obterCriancas());
  }

  ngOnInit() {
    this.obterCriancas();
  }

}
