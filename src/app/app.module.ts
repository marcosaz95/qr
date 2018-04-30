import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { NgQrScannerModule } from 'angular2-qrscanner';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgQRCodeReaderModule,
    NgxQRCodeModule,
    NgQrScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
