import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { AppService } from './app.service'
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  

  show = false;

  title = 'testa';
  pessoa!: Pessoa
 

  str = "31210564195886000159-65-001-000.028.258-100.421.3506"; 

  constructor(
    private AppService: AppService
  ) { }

chave:any = {
  uf : this.str.substring(0,2),
  ano : this.str.substring(2,4),
  mes : this.str.substring(4,6),
  cnpj : this.str.substring(6,20),
} 

ok(){
  if(this.chave.uf == "31"){
   this.chave.uf = "Minas gerais "
  }
  this.AppService.consultarCNPJ(this.chave.cnpj)
      .subscribe(value => this.pessoa = value)
this.show = !this.show;
    }

}
