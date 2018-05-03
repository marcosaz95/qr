import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'app-qr-search',
  templateUrl: './qr-search.component.html',
  styleUrls: ['./qr-search.component.scss']
})
export class QrSearchComponent implements OnInit {
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;
  orderCode: string;
  @Output() highlightOrder = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('back')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      this.highlightOrder.emit(result);
    });
  }

}
