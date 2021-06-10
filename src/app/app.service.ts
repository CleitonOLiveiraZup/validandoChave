import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './pessoa';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
    ) { }

    consultarCNPJ(cnpj:any){
      return this.http.jsonp<Pessoa>(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`, 'callback')
    }
}
