import { Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { AppService } from './app.service'
import { Pessoa } from './pessoa';

enum CameraStatuses {
  disabled = 'disabled',
  enabled = 'enabled',
  taken = 'taken'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  results: Array<any> = [];
  allowedFormats = [
    BarcodeFormat.AZTEC,
    BarcodeFormat.CODABAR,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_8,
    BarcodeFormat.EAN_13,
    BarcodeFormat.ITF,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.PDF_417,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.RSS_14,
    BarcodeFormat.RSS_EXPANDED,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.UPC_EAN_EXTENSION
  ]

  scanSuccessHandler(event: any) {
    console.log(event);
    this.results.unshift(event);
    
  }
  

  show = false;
  

  title = 'testa';
  pessoa!: Pessoa
 

  

  constructor(
    private AppService: AppService
  ) { }

chave:any = {
  uf :  this.results.toString().substring(0,2),
  ano : this.results.toString().substring(2,4),
  mes : this.results.toString().substring(4,6),
  cnpj : this.results.toString().substring(6,20),
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
