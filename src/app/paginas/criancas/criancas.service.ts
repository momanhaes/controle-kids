import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from 'src/app/shared/services/ajax.service';
import { ICrianca } from './crianca.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class CriancasService {
    constructor(
        private ajax: AjaxService
    ) { }

    public async obterCriancas() {
        const url = `${environment.baseUrl}5d49afc4320000e27d600e62`;
        return await this.ajax.get<ICrianca[]>(url);
    }
}
