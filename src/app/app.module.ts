import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { QrComponent } from './components/qr/qr.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { QrSearchComponent } from './components/qr-search/qr-search.component';
import { OrderService } from './services/order.service';
import { OrderNamePipe } from './pipes/order-name.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    QrComponent,
    OrderListComponent,
    OrderDetailComponent,
    QrSearchComponent,
    OrderNamePipe
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    NgQrScannerModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
