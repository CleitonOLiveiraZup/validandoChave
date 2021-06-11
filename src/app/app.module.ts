import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgPipesModule} from 'ngx-pipes';
import { CNPJPipe } from 'src/pipes/cnpj.pipe';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CNPJPipe
  ],
  imports: [
    BrowserModule,
    NgPipesModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule,
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
