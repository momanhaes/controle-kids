import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface ICriancaListPage {
  criancas: any;
}

@Component({
  selector: 'app-criancas-list',
  templateUrl: './criancas-list.component.html',
  styleUrls: ['./criancas-list.component.css']
})
export class CriancasListComponent implements OnInit {

  public data: ICriancaListPage;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.data = this.route.snapshot.data['data'];
    // console.log(this.getWindow());
  }
  public getWindow(): Window {
    return window;
  }
}
