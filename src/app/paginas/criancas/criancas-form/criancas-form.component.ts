import { Component, OnInit } from '@angular/core';
import { ICrianca } from '../crianca.interface';

@Component({
  selector: 'app-criancas-form',
  templateUrl: './criancas-form.component.html',
  styleUrls: ['./criancas-form.component.css']
})
export class CriancasFormComponent implements OnInit {
  crianca: ICrianca;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.crianca);
  }

}
