import { Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
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
  // str = "35210647508411171805651090000585731536564371"
  // str = "35201147960950089785550350003729931071303716"
   str = "31210564195886000159650010000282581004213506"
 

  

  constructor(
    private AppService: AppService
  ) { }

chave:any = {
  uf :  this.str.substring(0,2),
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
