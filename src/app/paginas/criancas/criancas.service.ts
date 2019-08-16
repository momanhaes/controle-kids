import { Injectable } from '@angular/core';
import { AjaxService } from 'src/app/shared/services/ajax.service';
import { ICrianca } from './crianca.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class CriancasService {
    constructor(
        private ajax: AjaxService
    ) { }

    public async obterCriancas() {
        const url = `${environment.baseUrl}5d4c33b43100006e00a952bb`;
        return await this.ajax.get<ICrianca[]>(url);
    }
}
