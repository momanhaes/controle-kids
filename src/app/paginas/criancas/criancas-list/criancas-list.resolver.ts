import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CriancasService } from '../criancas.service';
import { ICriancaListPage } from './criancas-list.component';

@Injectable()
export class CriancasListResolver implements Resolve<Promise<ICriancaListPage>> {

    constructor(protected criancasService: CriancasService) { }

    async resolve(): Promise<ICriancaListPage> {
        const criancas = await this.criancasService.obterCriancas();

        return {
            criancas
        } as ICriancaListPage;
    }
}
